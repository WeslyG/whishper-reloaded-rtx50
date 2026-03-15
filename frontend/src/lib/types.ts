export type Transcription = {
    language: string;
    duration: number;
    segments: Segment[];
    id: string;
    status: number;
    fileName: string;
    modelSize?: string;
    device?: string;
    startedAt?: string;
    finishedAt?: string;
    translations: Translation[];
    result?: {
        duration: number;
        text: string;
        segments: Segment[];
    };
}

export type Segment = {
    start: number;
    end: number;
    text: string;
    score: number;
    uuid: string;
    words?: WordData[];
};

type WordData = {
    start: number;
    end: number;
    text: string;
    score: number;
};

type Translation = {
    sourceLanguage: string;
    targetLanguage: string;
    text: string;
    segments: Segment[];
};
