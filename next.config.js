const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');


module.exports = (phase) => {
    
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return{
            env:{
                mongodb_usrname: '',
                mongodb_usrpwd: 'dyek4591%40%23',
                mongodb_clusternm: 'cluster0',
                mongodb_dbnm: 'my-site-dev'
            }
        }
    }
    
    return{
        env:{
            mongodb_usrname: '',
            mongodb_usrpwd: 'dyek4591%40%23',
            mongodb_clusternm: 'cluster0',
            mongodb_dbnm: 'my-site'
        }
    }
    
}