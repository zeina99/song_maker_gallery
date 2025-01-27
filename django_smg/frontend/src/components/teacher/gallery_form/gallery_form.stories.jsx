import React from "react";

import { GalleryForm } from "./gallery_form";

export default {
  title: "Teacher/Gallery Form",
  component: GalleryForm,
};

const Template = (args) => <GalleryForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  gallery: {
    title: "This Gallery",
    description:
      "We will always find a way to share music. In lieu of the concert " +
      "hall, our musical performances today are expressed in ones and " +
      "zeroes, but they are none the less as human and as meaningful as " +
      "always.\n\nPlease enjoy this showcase of our school's music lab " +
      "compositions. Our students' creativity truly knows no bounds!",
    pk: 1,
    songData: [
      [
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Mark J.",
          songId: "5676759593254912",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Chris C.",
          songId: "1234567891234567",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Matt F.",
          songId: "nothing",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "John C.",
          songId: "5676759593254912",
        },
        "A Group of Marks",
      ],
      [
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Sally G.",
          songId: "5676759593254912",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Sarah G.",
          songId: "5676759593254912",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Smithy G.",
          songId: "5676759593254912",
        },
        {
          metadata: {
            bars: 4,
            beats: 4,
            instrument: "marimba",
            octaves: 2,
            percussion: "electronic",
            percussionNotes: 2,
            rootNote: 48,
            rootOctave: 4,
            rootPitch: 0,
            scale: "major",
            subdivision: 2,
            tempo: 120,
          },
          midiBytes:
            "TVRoZAAAAAYAAQACA8BNVHJrAAAACwD/UQMHoSAA/y8ATVRyawAAAHIAwQ2lQJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINggT4AAJE+f4NgkT5/AIE+AINgkT5/AIE+AINggT4AAJE+fwCRPH8AkTt/g2CBPgAAgTwAAIE7AACRN38AkTl/g2CBNwAAgTkAsGD/LwA=",
          name: "Sammy G.",
          songId: "5676759593254912",
        },
        "A Group of S",
      ],
    ],
  },
};
