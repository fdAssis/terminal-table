import mocha from "mocha";
const { describe, it } = mocha;
import chai from "chai";
const { expect } = chai;
import Person from "./../src/person.js";

describe("Person", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Carro,Bike,Moto 20003004 2020-01-01 2022-01-10"
    );

    const expected = {
      from: "2020-01-01",
      to: "2022-01-10",
      vehicles: ["Carro", "Bike", "Moto"],
      kmTraveled: "20003004",
      id: "1",
    };

    expect(person).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = new Person({
      from: "2020-01-01",
      to: "2022-01-10",
      vehicles: ["Carro", "Bike", "Moto"],
      kmTraveled: "20003004",
      id: "1",
    });

    const result = person.formatted("pt-BR");
    const expected = {
      id: 1,
      vehicles: "Carro, Bike e Moto",
      kmTraveled: "20.003.004 km",
      from: "01 de janeiro de 2020",
      to: "10 de janeiro de 2022",
    };

    expect(result).to.be.deep.equal(expected);
  });
});
