import request from '../../utils/http-requests';
import helpers from '../../core/func/Helpers';

const lib = {}

lib.registerUser = async (data) => {
    let uri = '';
    try {  
        uri = `/register`;
        let cfg = helpers.getHeaderAccessControl();
        return await (await request.post(uri, data, cfg )).data
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.msg || e?.message }
    }
}

lib.loginUser = async (data) => {
    let uri = '';
    try {
        uri = `/login`;
        let cfg = helpers.getHeaderAccessControl();
        return await (await request.post(uri, data, cfg )).data
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.msg || e?.message }
    }
}

lib.logOutUser = async (token) => {
    let uri = '';
    try {
        uri = `/logout`;
        let tokener = helpers.getHeaderConfig(token);
        let cfg = helpers.getHeaderAccessControl();
        cfg.headers = {...cfg.headers, ...tokener.headers}
        return await (await request.get(uri, cfg )).data
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.msg || e?.message }
    }
}

export default lib;