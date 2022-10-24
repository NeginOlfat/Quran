import axios from "react-native-axios";

const BaseUrl = "http://api.alquran.cloud/v1";

export const fetchTranslation = (language) => {
    return axios.get(`${BaseUrl}/quran/${language}`)
        .then(
            (res) => {
                return res;
            }
        );
};

export const translationTransform = (result) => {
    const surahs = result.data.data.surahs;
    return surahs;
};
