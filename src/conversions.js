
const METRIC_TO_METRIC_WEIGHT = 1000;
const METRIC_TO_METRIC_DIMENSION = 10;
const GRM_TO_LB = 453.59237;
const MM_TO_IN = 25.4;

function toTwoDecimals(number) {
  const int = number.toFixed(2);
  return Number(int);
}

const Conversions = {
  convertWeight(metric, displayUnits) {
    const converted = {
      value: 0,
      unit: displayUnits && displayUnits.weight ? displayUnits.weight : "kg"
    };
    if (metric && metric.value) {
      if (metric.unit === "gr" && displayUnits.weight === "kg") {
        converted.value = toTwoDecimals(metric.value / METRIC_TO_METRIC_WEIGHT);
      }
      if (metric.unit === "gr" && displayUnits.weight === "lb") {
        converted.value = toTwoDecimals(metric.value / GRM_TO_LB);
      }
      if (metric.unit === "kg" && displayUnits.weight === "gr") {
        converted.value = toTwoDecimals(metric.value * METRIC_TO_METRIC_WEIGHT);
      }
      if (metric.unit === "kg" && displayUnits.weight === "lb") {
        converted.value = toTwoDecimals(metric.value * METRIC_TO_METRIC_WEIGHT / GRM_TO_LB);
      }
      if (metric.unit === "lb" && displayUnits.weight === "gr") {
        converted.value = toTwoDecimals(metric.value * GRM_TO_LB);
      }
      if (metric.unit === "lb" && displayUnits.weight === "kg") {
        converted.value = toTwoDecimals((metric.value * GRM_TO_LB) / METRIC_TO_METRIC_WEIGHT);
      }
      if (metric.unit === displayUnits.weight) {
        converted.value = toTwoDecimals(metric.value);
      }
    }
    return converted;
  },

  convertDimensions(metric, displayUnits) {
    const converted = {
      value: 0,
      unit: displayUnits && displayUnits.dimensions ? displayUnits.dimensions : "mm"
    };
    if (metric && metric.value) {
      if (metric.unit === "mm" && displayUnits.dimensions === "cm") {
        converted.value = toTwoDecimals(metric.value / METRIC_TO_METRIC_DIMENSION);
      }
      if (metric.unit === "mm" && displayUnits.dimensions === "in") {
        converted.value = toTwoDecimals(metric.value / MM_TO_IN);
      }
      if (metric.unit === "cm" && displayUnits.dimensions === "mm") {
        converted.value = toTwoDecimals(metric.value * METRIC_TO_METRIC_DIMENSION);
      }
      if (metric.unit === "cm" && displayUnits.dimensions === "in") {
        converted.value = toTwoDecimals(metric.value * METRIC_TO_METRIC_DIMENSION / MM_TO_IN);
      }
      if (metric.unit === "in" && displayUnits.dimensions === "mm") {
        converted.value = toTwoDecimals(metric.value * MM_TO_IN);
      }
      if (metric.unit === "in" && displayUnits.dimensions === "cm") {
        converted.value = toTwoDecimals((metric.value * MM_TO_IN) / METRIC_TO_METRIC_DIMENSION);
      }
      if (metric.unit === displayUnits.dimensions) {
        converted.value = toTwoDecimals(metric.value);
      }
    }
    return converted;
  }
};

try {
  exports.Conversions = Conversions;
} catch (e) { }