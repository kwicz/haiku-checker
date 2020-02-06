import { HaikuLines } from '../src/haiku.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

  describe('Haiku', () => {
    test('should have a value in each line', () => {
     let haikuLines = new HaikuLines(1, 2, 3);
      expect(haikuLines.line1).toEqual(1);
      expect(haikuLines.line2).toEqual(2);
      expect(haikuLines.line3).toEqual(3);

    });
    
    test('Input should NOT contain an number', () => {
      let haikuLines = new HaikuLines("1", "nan", "nan");
      expect(haikuLines.numberCheck()).toEqual("error");
    });
    
    test('Input should NOT contain an number', () => {
      let haikuLines = new HaikuLines("nan", "nan", "nan");
      expect(haikuLines.numberCheck()).toEqual("success");
    });
    
    test('Input should not accept puntuation', () => {
      let haikuLines = new HaikuLines("&", "nan", "nan");
      expect(haikuLines.puncCheck()).toEqual("fail");
    });
    
    test('Input should succeed if recieving 3 nans', () => {
      let haikuLines = new HaikuLines("nan", "nan", "nan");
      expect(haikuLines.puncCheck()).toEqual("success");
    });

    test('Input should return number of syllables', () => {
      let haikuLines = new HaikuLines("one", "seven", "eleven");
      expect(haikuLines.syllableCheck()).toEqual(1);
      // expect(haikuLines.line1.syllableCheck()).toEqual(2);
      // expect(haikuLines.line2.syllableCheck()).toEqual(3);
    });
  });

// describe('Row', () => {

//   test('should have a value for each of the 9 rows', () => {
//     var row = new Row(1,2,3,4,5,6,7,8,9);
//     expect(row.row0).toEqual(1); 
//     expect(row.row1).toEqual(2);
//     expect(row.row2).toEqual(3);
//     expect(row.row3).toEqual(4);
//     expect(row.row4).toEqual(5);
//     expect(row.row5).toEqual(6);
//     expect(row.row6).toEqual(7);
//     expect(row.row7).toEqual(8);
//     expect(row.row8).toEqual(9);
//   });

//   test('should have a sum of 45', () => {
//     var row = new Row(1,2,3,4,5,6,7,8,9);
//     expect(row.rowCheck()).toEqual(45);
//   });

//   test('numbers should not be equal', () => {
//     var row = new Row(1,2,3,4,5,6,7,8,9);
//     expect(row.checkDoubles()).toEqual("false");
//   });
// });