import request from '../utils/http-requests';
import helpers from '../core/func/Helpers';

const lib = {}

lib.fetchUserProfile = async (token) => {
    let uri = '';
    try {
        uri = `/profile`;
        let cfg = helpers.getHeaderConfig(token);
        return await (await request.get(uri, cfg )).data
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.msg || e?.message }
    }
}

export default lib;