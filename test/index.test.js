// test.js

const assert = require('assert');
const integrateChartingLibrary = require('../src/chartingLibraryIntegration');

describe('Charting Library Integration', function () {
    it('should render a line chart correctly', function () {
        const data = [10, 20, 30, 40, 50];
        const options = { title: 'Sample Line Chart' };
        const chart = integrateChartingLibrary('line', data, options);
        assert.strictEqual(chart.type, 'line');
        assert.deepStrictEqual(chart.data, data);
        assert.deepStrictEqual(chart.options, options);
    });

    it('should render a bar chart correctly', function () {
        const data = [50, 40, 30, 20, 10];
        const options = { title: 'Sample Bar Chart' };
        const chart = integrateChartingLibrary('bar', data, options);
        assert.strictEqual(chart.type, 'bar');
        assert.deepStrictEqual(chart.data, data);
        assert.deepStrictEqual(chart.options, options);
    });

    it('should render a pie chart correctly', function () {
        const data = [20, 30, 50];
        const options = { title: 'Sample Pie Chart' };
        const chart = integrateChartingLibrary('pie', data, options);
        assert.strictEqual(chart.type, 'pie');
        assert.deepStrictEqual(chart.data, data);
        assert.deepStrictEqual(chart.options, options);
    });
});
