describe("conversions tests", () => {
  const { expect } = require("chai");
  const Conversions = require("../index.js").Conversions;
  describe("Weight", () => {
    const displayUnits = {
      weight: "kg",
      dimensions: "cm"
    };
    it("should return 0 in the correct display unit if invalid element", () => {
      expect(Conversions.convertWeight(null, { weight: "lb" })).to.eql({ value: 0, unit: "lb" });
    })

    it("should return 0 in the default display unit (kg) if no displayUnit is given", () => {
      expect(Conversions.convertWeight()).to.eql({ value: 0, unit: "kg" });
    })

    it("should convert gr to kg", () => {
      const metric = {
        unit: "gr", value: 1250
      };
      expect(Conversions.convertWeight(metric, displayUnits)).to.eql({ value: 1.25, unit: "kg" })
    });

    it("should convert gr to lb", () => {
      const metric = {
        unit: "gr", value: 1250
      };
      expect(Conversions.convertWeight(metric, { weight: "lb" })).to.eql({ value: 2.76, unit: "lb" })
    });

    it("should convert kg to gr", () => {
      const metric = {
        unit: "kg", value: 12.5
      };
      expect(Conversions.convertWeight(metric, {weight: "gr"})).to.eql({ value: 12500, unit: "gr" })
    });

    it("should convert kg to lb", () => {
      const metric = {
        unit: "kg", value: 12.5
      };
      expect(Conversions.convertWeight(metric, { weight: "lb" })).to.eql({ value: 27.56, unit: "lb" })
    });

    it("should convert lb to gr", () => {
      const metric = {
        unit: "lb", value: 6.5
      };
      expect(Conversions.convertWeight(metric, { weight: "gr" })).to.eql({ value: 2948.35, unit: "gr" })
    });

    it("should convert lb to kg", () => {
      const metric = {
        unit: "lb", value: 6.5
      };
      expect(Conversions.convertWeight(metric, { weight: "kg" })).to.eql({ value: 2.95, unit: "kg" })
    });

    it("should not convert if both units are the same (lb)", () => {
      const metric = {
        unit: "lb", value: 6.5
      };
      expect(Conversions.convertWeight(metric, { weight: "lb" })).to.eql({ value:6.5, unit: "lb" })
    })

    it("should not convert if both units are the same (kg)", () => {
      const metric = {
        unit: "kg", value: 6.5
      };
      expect(Conversions.convertWeight(metric, { weight: "kg" })).to.eql({ value:6.5, unit: "kg" })
    })

    it("should not convert if both units are the same (gr)", () => {
      const metric = {
        unit: "gr", value: 6.5
      };
      expect(Conversions.convertWeight(metric, { weight: "gr" })).to.eql({ value:6.5, unit: "gr" })
    })
  });

  describe("Dimensions", () => {
    const displayUnits = {
      weight: "kg",
      dimensions: "mm"
    };
    it("should return 0 in the correct display unit if invalid element", () => {
      expect(Conversions.convertDimensions(null, { dimensions: "in" })).to.eql({ value: 0, unit: "in" });
    })

    it("should return 0 in the default display unit (mm) if no displayUnit is given", () => {
      expect(Conversions.convertDimensions()).to.eql({ value: 0, unit: "mm" });
    })

    it("should convert mm to cm", () => {
      const metric = {
        unit: "mm", value: 125
      };
      expect(Conversions.convertDimensions(metric, {dimensions: "cm"})).to.eql({ value: 12.5, unit: "cm" })
    });

    it("should convert mm to in", () => {
      const metric = {
        unit: "mm", value: 125
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "in" })).to.eql({ value: 4.92, unit: "in" })
    });

    it("should convert cm to mm", () => {
      const metric = {
        unit: "cm", value: 22.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "mm" })).to.eql({ value: 225, unit: "mm" })
    });

    it("should convert cm to in", () => {
      const metric = {
        unit: "cm", value: 12.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "in" })).to.eql({ value: 4.92, unit: "in" })
    });

    it("should convert in to mm", () => {
      const metric = {
        unit: "in", value: 6.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "mm" })).to.eql({ value: 165.1, unit: "mm" })
    });

    it("should convert in to cm", () => {
      const metric = {
        unit: "in", value: 6.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "cm" })).to.eql({ value: 16.51, unit: "cm" })
    });

    it("should not convert if both units are the same (cm)", () => {
      const metric = {
        unit: "cm", value: 6.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "cm" })).to.eql({ value:6.5, unit: "cm" })
    })

    it("should not convert if both units are the same (in)", () => {
      const metric = {
        unit: "in", value: 6.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "in" })).to.eql({ value:6.5, unit: "in" })
    })

    it("should not convert if both units are the same (mm)", () => {
      const metric = {
        unit: "mm", value: 6.5
      };
      expect(Conversions.convertDimensions(metric, { dimensions: "mm" })).to.eql({ value:6.5, unit: "mm" })
    })
  });
});