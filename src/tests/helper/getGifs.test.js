import {getGifs} from '../../helper/getGifs';

describe('pruebas con getfigs', ()=>{
test('should debe tener 10 elementos', async() => { 
    
    const gifs = await getGifs('one punch');
    expect(gifs.length).toBe(10);
 })

 test('should 0', async() => { 
     
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  })
})