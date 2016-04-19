import assert from 'power-assert';
import * as _ from 'lodash';
import * as api from './../../src/middleware/api';

describe('test api', () => {

    const endpoint = 'http://localhost:8080/api/todos';
    let created = {};
    let edited = {};
/*
    it('test1', () => {
        const method = api.API_METHOD.POST;
        const requestBody = { "task" : "test to create todo", "completed" : false };

        return api.callApi(endpoint, method, requestBody).then(
            response => {
                created = response.data;
                assert(response.data.task === requestBody.task);
                assert(response.data.completed === requestBody.completed);
            })
    });

    it('test2', () => {

        const method = api.API_METHOD.GET;

        return api.callApi(endpoint, method).then(
            response => {
            console.log(created.id);
                const target = _.find(response.data, (d) => d.id === created.id);
                assert(target.id === created.id);
                assert(target.task === created.task);
                assert(target.completed === created.completed);
            })
    });

    it('test3', () => {

        const method = api.API_METHOD.PUT;
        const requestBody = { id: created.id, task: "test to edit todo", completed: true };

        return api.callApi(endpoint + `/${created.id}`, method, requestBody).then(
            response => {
                edited = response.data;
                assert(edited.id === requestBody.id);
                assert(edited.task === requestBody.task);
                assert(edited.completed === requestBody.completed);
            })
    });

    it('test4', () => {

        const method = api.API_METHOD.GET;

        return api.callApi(endpoint, method).then(
            response => {
                const target = _.find(response.data, (d) => d.id === edited.id);
                assert(target.id === edited.id);
                assert(target.task === edited.task);
                assert(target.completed === edited.completed);
            })
    });

    it('test5', () => {

        const method = api.API_METHOD.DELETE;

        return api.callApi(endpoint + `/${created.id}`, method).then(
            response => {
                assert(JSON.stringify(response) === '{}');
            })
    });

    it('test6', () => {

        const method = api.API_METHOD.GET;

        return api.callApi(endpoint, method).then(
            response => {
                const target = _.find(response.data, (d) => d.id === edited.id);
                assert(_.isUndefined(target));
            })
    });

    */
});