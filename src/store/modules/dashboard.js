import axios from 'axios';

const state = {

    newApplicants : [],
    newApplicantsLength : 1,
    loaded:true
};

const getters = {
    getNewApplicantsLength:(state) => state.newApplicantsLength,
    getLoaded:(state) => state.loaded
};

const actions = {
    getNewApplicants({commit}){
        const dashboardData = axios.create()
        dashboardData.interceptors.request.use(function (config) {
            commit('SET_LOADED',true)
            return config;
          }, function (error) {
            
            return Promise.reject(error);
          });
        dashboardData.interceptors.response.use(function (response) {
            commit('SET_LOADED',true)
            return response;
          }, function (error) {
            
            return Promise.reject(error);
          });
        
       dashboardData.get('https://script.google.com/macros/s/AKfycbz8RbhI0pbPo3LGSQD7ERCQ35fHN0deqzI-YWo85Wt48_OgEsINW-upym0zcgun2dRLyA/exec')
        .then(response=>{
            

            commit('SET_NEWAPPLICANTS',response.data)
            commit('SET_LENGTH',response.data.length)
            console.log(response)
            
            
        }).catch(error=>{
            console.log(error)
        });
        
    }
};

const mutations = {
    
    SET_NEWAPPLICANTS(state,applicants){
        state.newApplicants = applicants
    },
    SET_LENGTH(state,length){
        state.newApplicantsLength = length 
    },
    SET_LOADED(state,status){
        state.loaded = status
    }
};

export default{
    state,
    getters,
    actions, 
    mutations
};