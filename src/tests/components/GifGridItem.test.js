import React from 'react'
import { shallow } from "enzyme";
import GrifGridItem from "../../components/GrifGridItem";

describe('pruebas en gifgriditem/>', () => {
    const title ='cualquier titulo'
    const url = 'https://google.com'
    const wrapper = shallow(<GrifGridItem title={title} url={url} />)

    test('debe mostrar el componente correctaente', () => { 
        expect(wrapper).toMatchSnapshot();

     })

     test('debe tener un parrafo', () => { 
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)         

      })
      test('should url same', () => { 
        const img = wrapper.find('img')
         // console.log(img.html())
          expect(img.prop('src')).toBe(url)
          expect(img.prop('alt')).toBe(title)
          
       })
       test('should has animate', () => { 
        const div = wrapper.find('div')
         // console.log(div.prop())
          const className = div.prop('className')
          expect(className.includes('animate__bounce')).toBe(true)
           
        })
})