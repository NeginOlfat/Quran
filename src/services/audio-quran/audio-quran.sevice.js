import axios from "react-native-axios";

const BaseUrl = "http://api.alquran.cloud/v1/surah/";

export const fetchAudioQuran = (number) => {
    return axios.get(`${BaseUrl}${number}/ar.alafasy`)
        .then(
            (res) => {
                return res;
            }
        );
};

export const AudioQuranTransform = (result) => {
    const ayahs = result.data.data.ayahs
    return ayahs;
};
