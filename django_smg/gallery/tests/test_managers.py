from django.contrib.auth.models import User
from django.db import models
from django.test import TestCase

from ..models import Gallery, Song, SongGroup
from ..managers import OrderManager

class Base(TestCase):

    def setUp(self):
        self.user = User.objects.create(                        # type: ignore
            username='testuser',
            password='testpass',
        )
        self.gallery = Gallery.objects.create(                  # type: ignore
            owner=self.user,
            title='Test Gallery',
            description='Test description is here.',
        )
        self.group = SongGroup.objects.create(                  # type: ignore
            group_name='Test Group',
            gallery=self.gallery
        )
        self.songs = [
            Song.objects.create(
                songId=f'{i}',
                student_name=n,
                gallery=self.gallery,
                group=self.group
            )
            for i, n in enumerate(('Sally', 'Chris', 'Tom'))
        ]


class TestOrderManager(Base):

    def test_default_order_assignment(self):
        self.assertEqual(self.songs[0].order, 0)
        self.assertEqual(self.songs[1].order, 1)
        self.assertEqual(self.songs[2].order, 2)

    def test_order_can_be_manually_assigned(self):
        obj = Song.objects.create(
            songId=10,
            student_name='Jake',
            gallery=self.gallery,
            group=self.group,
            order=3
        )
        self.assertEqual(obj.order, 3)

    def test_high_order_normalized(self):
        obj = Song.objects.create(
            songId=10,
            student_name='Jake',
            gallery=self.gallery,
            group=self.group,

            # order of 10 is brought down to three because that is the next
            # natural order
            order=10
        )
        self.assertEqual(obj.order, 3)

    def test_move_end_to_start(self):
        Song.objects.move(self.songs[2], 0)

        # last song shited back into position 0
        self.assertEqual(self.songs[2].order, 0)

        # other songs were shifted to the right
        [s.refresh_from_db() for s in self.songs]
        self.assertEqual(self.songs[0].order, 1)
        self.assertEqual(self.songs[1].order, 2)

    def test_move_start_to_end(self):
        Song.objects.move(self.songs[0], 2)

        # first song shited forward into position 2
        self.assertEqual(self.songs[0].order, 2)

        # other songs were shifted to the left
        [s.refresh_from_db() for s in self.songs]
        self.assertEqual(self.songs[1].order, 0)
        self.assertEqual(self.songs[2].order, 1)


class TestSlugManager(Base):

    def setUp(self):
        self.user = User.objects.create_user(
            'jack', 'jack@jack.com', 'jackpassword'
        )
        self.galleries = [
            Gallery.objects.create(
                owner=self.user,
                title='Test Gallery Name',
            )
            for _ in range(20)
        ]

    def get_queryset(self):
        return Gallery.objects.all()  # type: ignore

    def test_slug_created(self):
        self.assertEqual(self.galleries[0].slug, 'test-gallery-name')


    def test_slug_naming_conflict_avoidance(self):
        for obj in self.get_queryset():
            self.assertEqual(obj.slug[:17], 'test-gallery-name')

    def test_slug_does_not_mutate_on_update(self):
        for obj in self.get_queryset():
            # check that the url does not change on update
            original_url = obj.slug
            obj.description = 'new description'
            obj.save()
            obj.refresh_from_db()
            new_url = obj.slug
            self.assertEqual(original_url, new_url)

    def test_conflicting_names_sequenced_correctly(self):
        """
        Galleries with overlapping names should append a number to the end
        of the gallery slug sequenetially.

        For example:

        - test-gallery-name
        - test-gallery-name1
        - test-gallery-name2
        etc...
        """
        sorted_ = self.get_queryset().order_by('created')
        for i, gallery in enumerate(sorted_):
            if not i:  # no appended int yet
                self.assertEqual(gallery.slug, 'test-gallery-name')
                continue
            i = '-' + str(i)
            # convert i to str expected at end of slug
            self.assertEqual(gallery.slug[17:], str(i))

    def test_slugify_long_title(self):
        """
        Slug strings can be any length. The slugify method should chop them
        of after 40 characters.
        """
        gal = Gallery.objects.create(  # type: ignore
            owner=self.user,
            title=('Test Gallery Name' * 5),
        )
        self.assertEqual(
            gal.slug,
            'test-gallery-nametest-gallery-nametest-g'
        )
