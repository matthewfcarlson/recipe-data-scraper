import proxyquire from 'proxyquire';
import { should } from "chai";
import sinon from 'sinon';
should();

describe('recipeModelBuilder', () => {
  let recipeModelBuilder;
  const loggerStub = sinon.stub();

  before(() => {
    recipeModelBuilder = proxyquire.noCallThru().load('./recipeModelBuilder', {
      '../logger': loggerStub,
    }).default;
  });

  describe('expected behavior when passed all possible properties', () => {
    let result;
    const originalProperties = {
      url: 'test_url',
      name: 'test_name',
      image: 'test_image',
      photo: 'test_photo',
      thumbnailUrl: 'test_thumbnailUrl',
      description: 'test_description',
      cookTime: 'test_cookTime',
      prepTime: 'test_prepTime',
      totalTime: 'test_totalTime',
      recipeYield: 'test_recipeYield',
      yield: 'test_yield',
      recipeIngredients: 'test_recipeIngredients',
      recipeIngredient: 'test_recipeIngredient',
      ingredients: 'test_ingredients',
      ingredient: 'test_ingredient',
      recipeInstructions: 'test_recipeInstructions',
      instructions: 'test_instructions',
      step: 'test_step',
      recipeCategory: 'test_recipeCategory',
      recipeCuisine: 'test_recipeCuisine',
      recipeType: 'test_recipeType',
      keywords: 'test_keywords',
      tag: 'test_tag',
    };

    const expectedProperties = {
      url: 'test_url',
      name: 'test_name',
      image: 'test_image',
      description: 'test_description',
      cookTime: 'test_cookTime',
      prepTime: 'test_prepTime',
      totalTime: 'test_totalTime',
      recipeYield: 'test_recipeYield',
      recipeIngredient: 'test_recipeIngredient',
      recipeInstructions: 'test_recipeInstructions',
      recipeCategory: 'test_recipeCategory',
      recipeCuisine: 'test_recipeCuisine',
      recipeType: 'test_recipeType',
      keywords: 'test_keywords',
    };

    before(() => {
      result = recipeModelBuilder(originalProperties);
    });

    it('the properties should match the final model', () => {
      result.should.eql({
        ...expectedProperties,
      });
    });
  });

  describe('expected behavior when passed fallback properties', () => {
    let result;
    const originalProperties = {
      url: 'test_url',
      name: 'test_name',
      photo: 'test_photo',
      description: 'test_description',
      cookTime: 'test_cookTime',
      prepTime: 'test_prepTime',
      totalTime: 'test_totalTime',
      yield: 'test_yield',
      ingredient: 'test_ingredient',
      instructions: 'test_instructions',
      recipeCategory: 'test_recipeCategory',
      recipeCuisine: 'test_recipeCuisine',
      recipeType: 'test_recipeType',
      tag: 'test_tag',
    };

    const expectedProperties = {
      url: 'test_url',
      name: 'test_name',
      image: 'test_photo',
      description: 'test_description',
      cookTime: 'test_cookTime',
      prepTime: 'test_prepTime',
      totalTime: 'test_totalTime',
      recipeYield: 'test_yield',
      recipeIngredient: 'test_ingredient',
      recipeInstructions: 'test_instructions',
      recipeCategory: 'test_recipeCategory',
      recipeCuisine: 'test_recipeCuisine',
      recipeType: 'test_recipeType',
      keywords: 'test_tag',
    };

    before(() => {
      result = recipeModelBuilder(originalProperties);
    });

    it('the keys should match the final model with fallback values', () => {
      result.should.eql({
        ...expectedProperties,
      });
    });
  });
});