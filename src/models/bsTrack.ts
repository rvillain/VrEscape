export class BsTrack {
    _events: BsEvent[];
    _notes: BsNote[];

    _beatsPerMinute: number;

    _version: string;
    _bookmarks: [];
    _BPMChanges: [];
}

export class BsEvent {
    _time: number;
    _type: number;
    _value?: number;
}

export class BsNote {
    _time: number;
    _lineIndex: number;
    _lineLayer: number;
    _type: number;
    _cutDirection: number;
}

export var echaillonTrack: BsTrack = {
    _beatsPerMinute: 114,
    _version: '2.0.0',
    _BPMChanges: [

    ],
    _events: [
        {
            _time: 0,
            _type: 12,
            _value: 2
        },
        {
            _time: 0,
            _type: 8,
            _value: 0
        },
        {
            _time: 0,
            _type: 13,
            _value: 2
        },
        {
            _time: 0,
            _type: 1,
            _value: 1
        },
        {
            _time: 16,
            _type: 8,
            _value: 0
        },
        {
            _time: 16,
            _type: 1,
            _value: 5
        },
        {
            _time: 32,
            _type: 1,
            _value: 1
        },
        {
            _time: 32,
            _type: 8,
            _value: 0
        },
        {
            _time: 48,
            _type: 8,
            _value: 0
        },
        {
            _time: 48,
            _type: 1,
            _value: 5
        },
        {
            _time: 64,
            _type: 1,
            _value: 1
        },
        {
            _time: 64,
            _type: 8,
            _value: 0
        },
        {
            _time: 80,
            _type: 8,
            _value: 0
        },
        {
            _time: 80,
            _type: 1,
            _value: 5
        },
        {
            _time: 96,
            _type: 1,
            _value: 1
        },
        {
            _time: 96,
            _type: 8,
            _value: 0
        },
        {
            _time: 112,
            _type: 8,
            _value: 0
        },
        {
            _time: 112,
            _type: 1,
            _value: 5
        },
        {
            _time: 128,
            _type: 1,
            _value: 1
        },
        {
            _time: 128,
            _type: 8,
            _value: 0
        },
        {
            _time: 144,
            _type: 8,
            _value: 0
        },
        {
            _time: 144,
            _type: 1,
            _value: 5
        },
        {
            _time: 160,
            _type: 1,
            _value: 1
        },
        {
            _time: 160,
            _type: 8,
            _value: 0
        },
        {
            _time: 176,
            _type: 8,
            _value: 0
        },
        {
            _time: 176,
            _type: 1,
            _value: 5
        },
        {
            _time: 192,
            _type: 1,
            _value: 1
        },
        {
            _time: 192,
            _type: 8,
            _value: 0
        },
        {
            _time: 208,
            _type: 8,
            _value: 0
        },
        {
            _time: 208,
            _type: 1,
            _value: 5
        },
        {
            _time: 224,
            _type: 1,
            _value: 1
        },
        {
            _time: 224,
            _type: 8,
            _value: 0
        },
        {
            _time: 240,
            _type: 8,
            _value: 0
        },
        {
            _time: 240,
            _type: 1,
            _value: 5
        },
        {
            _time: 256,
            _type: 1,
            _value: 1
        },
        {
            _time: 256,
            _type: 8,
            _value: 0
        },
        {
            _time: 272,
            _type: 8,
            _value: 0
        },
        {
            _time: 272,
            _type: 1,
            _value: 5
        },
        {
            _time: 288,
            _type: 1,
            _value: 1
        },
        {
            _time: 288,
            _type: 8,
            _value: 0
        },
        {
            _time: 304,
            _type: 8,
            _value: 0
        },
        {
            _time: 304,
            _type: 1,
            _value: 5
        },
        {
            _time: 320,
            _type: 1,
            _value: 1
        },
        {
            _time: 320,
            _type: 8,
            _value: 0
        },
        {
            _time: 336,
            _type: 8,
            _value: 0
        },
        {
            _time: 336,
            _type: 1,
            _value: 5
        },
        {
            _time: 352,
            _type: 1,
            _value: 1
        },
        {
            _time: 352,
            _type: 8,
            _value: 0
        },
        {
            _time: 368,
            _type: 8,
            _value: 0
        },
        {
            _time: 368,
            _type: 1,
            _value: 5
        },
        {
            _time: 384,
            _type: 1,
            _value: 1
        },
        {
            _time: 384,
            _type: 8,
            _value: 0
        },
        {
            _time: 400,
            _type: 8,
            _value: 0
        },
        {
            _time: 400,
            _type: 1,
            _value: 5
        },
        {
            _time: 416,
            _type: 1,
            _value: 1
        },
        {
            _time: 416,
            _type: 8,
            _value: 0
        },
        {
            _time: 432,
            _type: 8,
            _value: 0
        },
        {
            _time: 432,
            _type: 1,
            _value: 5
        },
        {
            _time: 448,
            _type: 8,
            _value: 0
        },
        {
            _time: 448,
            _type: 3,
            _value: 1
        },
        {
            _time: 448,
            _type: 3,
            _value: 1
        },
        {
            _time: 456,
            _type: 3,
            _value: 7
        }
    ],
    _notes: [
        {
            _time: -7.477207183837891,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -6.477207183837891,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -5.477207183837891,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -4.477207183837891,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -3.4772071838378906,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -3.4772071838378906,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: -2.4772071838378906,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 8,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 10,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 10.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 12,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 12.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 14,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 14.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 16,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 16.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 18,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 18.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 20,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 20.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 22,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 22.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 24,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 24.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 26,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 26.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 28,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 28.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 30,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 30.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 32,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 33,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 34,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 35,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 35,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 35,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 35,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 35,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 35,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 35.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 35.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 36.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 37,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 38,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 39.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 39.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 40.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 40.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 41,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 42,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 42,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 42.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 42.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 43.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 43.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 45,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 45,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 46,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 46.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 46.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 48,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 49,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 50,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 51,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 51,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 51,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 51,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 51,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 51,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 52,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 53,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 54,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 54.5,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 54.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 55.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 55.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 56.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 56.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 57,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 58,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 58.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 58.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 59.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 59.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 61,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 61,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 62,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 62.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 63.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 63.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 64.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 64.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 65,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 65,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 65.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 66,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 66.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 67.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 68.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 68.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 69,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 69,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 69.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 70.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 70.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 71,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 71,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 71.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 71.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 72.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 72.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 73,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 73,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 73.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 74,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 74.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 74.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 74.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 75.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 76.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 76.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 77,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 77,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 77.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 77.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 80,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 80.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 81.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 82,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 82,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 82.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 82.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 84,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 84.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 85.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 86,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 86.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 86.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 88,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 88.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 89.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 90,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 90.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 90.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 92,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 92.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 93.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 94,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 94,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 94.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 94.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 96,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 96.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 97.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 98,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 98,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 98.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 98.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 100,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 100.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 101.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 102,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 102,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 102.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 102.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 104,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 104.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 105.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 106,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 106.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 106.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 108,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 108.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 109,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 109.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 110,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 110.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 110.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 110.75,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 110.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 110.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 112,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 112,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 113,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 113.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 114,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 114,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 115,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 115.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 116,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 116,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 117,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 117.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 118,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 118,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 119,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 119,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 119,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 119,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 120,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 120,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 121,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 121.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 122,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 122,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 123,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 123.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 124,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 124,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 125,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 125.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 126,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 126,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 127,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 127,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 127,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 127,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 128,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 128,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 129,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 129.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 130,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 130,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 131,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 131.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 132,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 132,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 133,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 133.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 134,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 134,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 135,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 135,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 135,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 135,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 136,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 136,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 137,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 137.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 138,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 138,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 139,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 139.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 140,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 140,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 141,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 141.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 142,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 142,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 143,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 143,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 144,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 147.25,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 147.25,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 148,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 148,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 151.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 151.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 152.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 152.5,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 153.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 153.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 154,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 154,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 155.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 155.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 156.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 156.5,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 157.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 157.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 158,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 158,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 159.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 160,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 160,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 163.25,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 163.25,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 164,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 164,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 167.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 167.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 168.5,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 169.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 169.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 170,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 170,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 171.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 171.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 172.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 172.5,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 173.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 173.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 174,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 174,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 175.5,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 175.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 176,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 176,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 177,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 177.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 178,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 178.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 178.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 179.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 179.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 180.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 181,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 181.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 182,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 182.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 183,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 183.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 183.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 184.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 185,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 185.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 186,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 188,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 188.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 189,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 189.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 190,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 190.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 191,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 191.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 192,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 192.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 193,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 193.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 194,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 194.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 195,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 195.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 196,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 196.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 197,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 197.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 198,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 198.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 199,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 199.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 200,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 200.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 201,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 201.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 202,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 202.25,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 203,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 203.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 204,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 204.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 205,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 205.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 206,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 206.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 207,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 207.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 208,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 208,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 210,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 210.25,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 210.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 211.25,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 211.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 214,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 214.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 214.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 216,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 216,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 216.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 216.75,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 218,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 218,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 218.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 218.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 220,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 220,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 220.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 220.75,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 222,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 222,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 222.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 222.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 224,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 224,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 228,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 229,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 229.5,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 230,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 232,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 232,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 232.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 232.75,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 234,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 234,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 234.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 234.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 236,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 236,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 236.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 236.75,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 238,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 238,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 238.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 238.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 240,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 240,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 240,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 240,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 244,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 244.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 245.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 246,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 246,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 246.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 246.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 248,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 248.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 248.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 248.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 249.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 249.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 250.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 250.25,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 251,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 251,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 252,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 252.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 252.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 252.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 253.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 253.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 254,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 254,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 254.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 254.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 256,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 256.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 256.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 257.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 258,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 258,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 258.5,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 258.5,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 259,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 259,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 260,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 260.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 261.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 262.25,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 263,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 264,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 264,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 264.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 264.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 265.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 266,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 266,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 266.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 266.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 267.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 267.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 267.75,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 267.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 268.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 268.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 269.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 269.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 270,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 270,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 270.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 270.75,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 271.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 272,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 272,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 272.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 272.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 273.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 273.25,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 274,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 274,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 274.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 274.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 275.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 275.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 276.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 276.75,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 277.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 277.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 278.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 279,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 279.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 279.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 279.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 282,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 282.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 282.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 283.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 283.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 284.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 284.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 285.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 285.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 286.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 286.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 287,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 287.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 287.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 288.25,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 288.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 288.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 288.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 289,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 289,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 289.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 289.5,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 289.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 289.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 290.25,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 290.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 290.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 290.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 291,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 291,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 291.25,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 291.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 291.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 291.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 292,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 292,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 292.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 292.5,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 292.75,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 292.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 293.25,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 293.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 293.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 293.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 294,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 294,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 294.25,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 294.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 294.75,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 294.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 295,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 295,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 295.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 295.5,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 296,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 296,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 300,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 300.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 300.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 301.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 301.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 302,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 302.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 302.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 303.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 303.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 304,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 304.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 2
        },
        {
            _time: 304.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 305.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 305.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 306.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 306.5,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 307,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 307,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 308,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 308.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 308.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 308.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 309.25,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 309.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 310.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 310.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 310.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 311,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 311.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 311.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 312,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 312.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 312.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 312.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 313.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 313.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 314.25,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 314.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 315,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 315.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 316,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 316.25,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 316.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 316.75,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 317.25,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 317.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 318.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 318.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 319,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 319.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 319.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 328,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 328,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 328,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 328,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 330,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 330,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 330.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 330.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 332,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 332,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 332,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 332,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 334,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 334,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 334.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 334.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 336,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 336,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 336,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 336,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 338,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 338,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 338.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 338.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 340,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 340,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 340,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 340,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 342,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 342,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 342.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 342.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 344,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 344,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 344,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 344,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 346,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 346,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 346.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 346.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 348,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 348,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 348,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 348,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 350,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 350,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 350.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 350.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 352,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 352,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 352,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 352,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 354,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 354,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 354.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 354.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 356,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 356,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 356,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 356,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 358,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 358,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 5
        },
        {
            _time: 358.75,
            _lineIndex: 0,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 4
        },
        {
            _time: 358.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 360,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 360,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 360.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 360.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 361.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 362,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 362.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 362.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 363.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 364,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 364,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 364.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 364.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 365.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 366,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 366.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 366.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 367.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 368,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 368,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 368.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 368.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 369.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 370,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 370,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 370.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 370.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 372,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 372,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 372.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 372.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 373.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 374,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 374,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 374.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 374.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 376,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 376,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 376.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 376.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 377.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 378,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 378.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 378.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 379.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 380,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 380,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 380.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 380.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 381.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 382,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 382.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 382.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 383.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 384,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 384,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 384.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 384.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 385.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 386,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 386,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 386.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 386.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 388,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 388,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 388.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 388.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 389.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 390,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 390,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 390.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 390.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 392,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 392,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 392.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 392.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 393.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 394,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 394.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 394.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 395.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 396,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 396,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 396.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 396.75,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 397.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 398,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 398.5,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 3
        },
        {
            _time: 398.75,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 399.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 400,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 400,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 400.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 400.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 401.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 402,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 402,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 402.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 402.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 404,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 404,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 404.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 7
        },
        {
            _time: 404.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 6
        },
        {
            _time: 405.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 406,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 406,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 406.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 406.75,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 408,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 408,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 408.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 408.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 411,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 411,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 411.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 411.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 412.25,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 412.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 414,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 414,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 414.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 414.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 415,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 415,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 415.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 415.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 417,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 417,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 418,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 418,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 419.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 419.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 421,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 421,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 422,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 422,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 422.5,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 422.5,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 423,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 423,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 423.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 423.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 424,
            _lineIndex: 0,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 424,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 6
        },
        {
            _time: 424,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 424,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 7
        },
        {
            _time: 425.5,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 425.75,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 427,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 427,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 428,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 428,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 429,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 429,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 429.5,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 429.75,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 431,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 431,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 432,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 432,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 432.5,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 432.5,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 434,
            _lineIndex: 0,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 2
        },
        {
            _time: 434,
            _lineIndex: 3,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 3
        },
        {
            _time: 435,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 435,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 436,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 436,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 437,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 437,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 438,
            _lineIndex: 3,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 438.5,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 439,
            _lineIndex: 1,
            _lineLayer: 2,
            _type: 0,
            _cutDirection: 0
        },
        {
            _time: 439.25,
            _lineIndex: 2,
            _lineLayer: 2,
            _type: 1,
            _cutDirection: 0
        },
        {
            _time: 440,
            _lineIndex: 1,
            _lineLayer: 0,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 440,
            _lineIndex: 1,
            _lineLayer: 1,
            _type: 0,
            _cutDirection: 1
        },
        {
            _time: 440,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 1
        },
        {
            _time: 440,
            _lineIndex: 2,
            _lineLayer: 1,
            _type: 1,
            _cutDirection: 1
        }
    ],
    _bookmarks: [

    ]
};