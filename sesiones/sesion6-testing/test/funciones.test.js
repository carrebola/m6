import { assert } from "chai";
import { expect } from "chai";
import { suma } from "../src/funciones.js";

describe("validamos operaciones", ()=>{
  it('Debe sumar dos números correctamente', ()=>{
    assert.equal(suma(2,4), 6)
  })
  it('Lo mismo usando expect', ()=>{
    expect(suma(0, 0)).to.equal(0);
    expect(suma(-1, 1)).to.equal(0);
  })
})