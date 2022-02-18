import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(()=>{
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('creando snapshot', () => { 
        expect( wrapper ).toMatchSnapshot();
     })

     test('should be cambiar caja de texto', () => { 
         
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        console.log(wrapper);
        input.simulate('change',{target:{value:value}});
        
        expect(wrapper.find('p').text().trim()).toBe(value);


      })
      test('should no debe postear on submit', () => { 
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });         
        
        expect( setCategories ).not.toHaveBeenCalled();

       })

       test('should limpiar caja de texto', () => { 
           const value='hola mundo';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{ preventDefault(){}   });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');

       
    });   

})