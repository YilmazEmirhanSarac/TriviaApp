import React from 'react'
import { useTest } from '../context/TestContext'

function HomeScreen() {
    
    const { startTest } = useTest()

    return (
        <>
            <h1 className='homeHeader'>Question App</h1>
            <h3 className='homeHeader2'>Teste hoş geldiniz talimatlar aşağıda ki alanda yer almaktadır.</h3>
            <p className='homeParagraph'>Talimatlar: Sınava başla dedikten sonra ilk dört saniye sadece soru görünecektir. <br />
                Bu süre dışında kalan yirmi altı saniye ile birlikte toplam otuz saniye içinde soruyu cevaplamak zorundasınız. <br />
                Sorunun cevap şıklarından birini işaretledikten veya otuz saniye süreniz dolduktan sonra sonraki soruya geçilecektir. <br />
                Geçmiş sorulara dönme hakkınız bulunmamaktadır. Başarılar.
            </p>
            <button className='starterButton' onClick={startTest}>Teste başla</button>
        </>
    );
}

export default HomeScreen;