import axios from "axios";

const GAMEINFO_API_BASE_URL = "http://localhost:8080/api/v1/gameInfo";

class GameInfoService {
    getGameInfo() {
        return axios.get(GAMEINFO_API_BASE_URL);
    }

    createGameInfo(gameInfo) {
        return axios.post(GAMEINFO_API_BASE_URL, gameInfo);
    }

    getGameInfoById(gameInfoId) {
        return axios.get(GAMEINFO_API_BASE_URL + '/' + gameInfoId);
    }

    updateGameInfo(gameInfo, gameInfoId) {
        return axios.put(GAMEINFO_API_BASE_URL + '/' + gameInfoId, gameInfo);
    }

    deleteGameInfo(gameInfoId) {
        return axios.delete(GAMEINFO_API_BASE_URL + '/' + gameInfoId)
    }
}

export default new GameInfoService()