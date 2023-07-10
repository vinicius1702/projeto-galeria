import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

function createModal(path, alt, figcaption, nation, link){
    const div = $('<div>').addClass(['col-12', 'col-md-6', 'col-xl-3', 'mb-4', 'text-muted', 'text-center']).attr('data-bs-toggle', 'modal').attr('data-bs-target', `#${figcaption.replaceAll(" ", "_")}`)
    const figure = $('<figure>').addClass('figure')
    const figInside = $(div).append(figure)
    const image = $('<img>').addClass(['img-fluid', 'figure-img', 'rounded']).attr('src', path).attr('alt', alt).attr('wm-nation', nation)
    const figCaption = $('<figcaption>').addClass('figure-caption').append(figcaption)
    const readyImg = $(figInside).append(image, figCaption)

    const divModal1 = $('<div>').addClass(['modal', 'fade']).attr('id', figcaption.replaceAll(" ", "_")).attr('tabindex', '-1').attr('aria-labelledby', figcaption.replaceAll(" ", "_") + 1).attr('aria-hidden', 'true')
    const divModal2 = $('<div>').addClass(['modal-dialog', 'modal-dialog-centered', 'modal-lg'])
    const divModal3 = $('<div>').addClass('modal-content')
    const modalTitle = $('<h1>').addClass('modal-title fs-5 text-center').attr('id', figcaption.replaceAll(" ", "_") + 1).append(figcaption)
    const closeButton = $('<button>').addClass('btn-close').attr('type', 'button').attr('data-bs-dismiss', 'modal').attr('aria-label', 'Close')
    const modalHeader = $('<div>').addClass('modal-header').append(modalTitle, closeButton)
    const modalImg = $('<img>').addClass(['img-fluid', 'rounded']).attr('src', path).attr('alt', alt)
    const modalBody = $('<div>').addClass('modal-body').append(modalImg)
    const linkFont = $('<a>').addClass(['link-body-emphasis', 'link-offset-2', 'link-underline-opacity-25', 'link-underline-opacity-75-hover']).attr('target', '_blank').attr('href', link).append('Fonte da imagem')
    const modalFooter = $('<div>').addClass('modal-footer d-flex justify-content-between').attr('idcopy', figcaption.replaceAll(" ", "_")).append(linkFont)
    $(divModal3).append(modalHeader, modalBody, modalFooter)
    $(divModal2).append(divModal3)
    $(divModal1).append(divModal2)

    return {
        imgs: readyImg,
        modals: divModal1
    }
}

const pics = [
    createModal("imgs/central_park.jpg"//path
    , "Foto do Central Park dos Estados Unidos"//alt
    , 'Central Park'//caption
    , "Estados Unidos"//nation
    , "https://br.freepik.com/fotos-gratis/new-york-city-manhattan-central-park-no-outono_29452227.htm#query=central%20park&position=21&from_view=search&track=ais"//link
    ),
    createModal("imgs/pao_acucar.jpg"//path
    , "Foto do morro pão de açucar do Brasil"//alt
    , 'Morro do Pão de Açucar'//caption
    , "Brasil"//nation
    , "https://br.freepik.com/fotos-gratis/foto-aerea-do-rio-de-janeiro-cercado-pelo-mar-e-morros-sob-o-sol-no-brasil_9971344.htm#query=rio%20de%20janeiro&position=5&from_view=search&track=ais"//link
    ),
    createModal("imgs/estatua_liberdade.jpg"//path
    , "Foto da estatua da liberdade dos Estados Unidos"//alt
    , 'Estátua da Liberdade'//caption
    , "Estados Unidos"//nation
    , "https://br.freepik.com/fotos-gratis/estatua-da-liberdade-e-o-horizonte-da-cidade-de-nova-york-eua_10480176.htm#query=estatua%20da%20liberdade&position=0&from_view=search&track=ais"//link
    ),
    createModal("imgs/torre_eiffel.jpg"//path
    , "Foto da torre eiffel da França"//alt
    , 'Torre Eiffel'//caption
    , "França"//nation
    , "https://br.freepik.com/fotos-gratis/bela-foto-ampla-da-torre-eiffel-em-paris-rodeada-de-agua-com-navios-sob-o-ceu-colorido_8409036.htm#query=torre%20eiffel&position=1&from_view=search&track=ais"//link
    ),
    createModal("imgs/museu_de_louvre.jpg"//path
    , "Foto do museu de louvre da França"//alt
    , 'Museu de Louvre'//caption
    , "França"//nation
    , "https://pixabay.com/pt/photos/paris-museu-do-louvre-pir%C3%A2mide-2643590/"//link
    ),
    createModal("imgs/big_ben.jpg"//path
    , "Foto do Big Ben da Inglaterra"//alt
    , 'Big Ben'//caption
    , "Inglaterra"//nation
    , "https://br.freepik.com/fotos-gratis/big-ben-e-westminster-bridge-ao-por-do-sol-londres-reino-unido_10589985.htm#query=Big%20Ben&position=0&from_view=search&track=ais"//link
    ),
    createModal("imgs/london_eye.jpg"//path
    , "Foto do London Eye da Inglaterra"//alt
    , 'London Eye'//caption
    , "Inglaterra"//nation
    , "https://pixabay.com/pt/photos/roda-gigante-london-eye-roda-noite-622698/"//link
    ),
    createModal("imgs/tower_bridge.jpg"//path
    , "Foto da Tower Bridge da Inglaterra"//alt
    , 'Tower Bridge'//caption
    , "Inglaterra"//nation
    , "https://br.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_10585678.htm#query=Tower%20Bridge&position=3&from_view=search&track=ais"//link
    ),
    createModal("imgs/coliseu.jpg"//path
    , "Foto de coliseu da Itália"//alt
    , 'Coliseu'//caption
    , "Itália"//nation
    , "https://pixabay.com/pt/photos/roma-it%C3%A1lia-coliseu-ancestral-3550739/"//link
    ),
    createModal("imgs/fonte_de_trevi.jpg"//path
    , "Foto de Fonte de Trevi da Itália"//alt
    , 'Fonte de Trevi'//caption
    , "Itália"//nation
    , "https://pixabay.com/pt/photos/fonte-de-trevi-fonte-roma-arte-2796710/"//link
    ),
    createModal("imgs/panteao.jpg"//path
    , "Foto de Panteão da Itália"//alt
    , 'Panteão'//caption
    , "Itália"//nation
    , "https://pixabay.com/pt/photos/roma-pante%C3%A3o-arquitetura-igreja-5008958/"//link
    ),
    createModal("imgs/tokyo_skytree.jpg"//path
    , "Foto de Tokyo Skytree do Japão"//alt
    , 'Tokyo Skytree'//caption
    , "Japão"//nation
    , "https://pixabay.com/pt/photos/natureza-da-tokyo-skytree-t%C3%B3quio-2496153/"//link
    ),
    createModal("imgs/templo_senso-ji.jpg"//path
    , "Foto do Templo Senso-ji do Japão"//alt
    , 'Templo Senso-ji'//caption
    , "Japão"//nation
    , "https://pixabay.com/pt/photos/sens%C5%8D-ji-t%C3%AAmpora-quioto-jap%C3%A3o-1437734/"//link
    ),
    createModal("imgs/praias_maldivas.jpg"//path
    , "Foto de Praia em Maldivas"//alt
    , 'Praia das Maldivas'//caption
    , "Maldivas"//nation
    , "https://pixabay.com/pt/photos/maldivas-coqueiro-mar-recorrer-262516/"//link
    ),
    createModal("imgs/banff_national_park.jpg"//path
    , "Foto de banff_national_park no Canadá"//alt
    , 'Parque Nacional Banff'//caption
    , "Canadá"//nation
    , "https://pixabay.com/pt/photos/montanhas-rio-banff-arvores-5936682/"//link
    ),
    createModal("imgs/opera_house.jpg"//path
    , "Foto do Opera House na Austrália"//alt
    , 'Opera House'//caption
    , "Austrália"//nation
    , "https://pixabay.com/pt/photos/opera-house-sydney-austr%C3%A1lia-4698518/"//link
    ),
    createModal("imgs/grand_canyon.jpg"//path
    , "Foto do Grand Canyon nos Estados Unidos"//alt
    , 'Grand Canyon'//caption
    , "Estados Unidos"//nation
    , "https://pixabay.com/pt/photos/deserto-bend-horsheshoe-grand-canyon-1867005//"//link
    ),
    createModal("imgs/machu_picchu.jpg"//path
    , "Foto do Machu Picchu no Peru"//alt
    , 'Machu Picchu'//caption
    , "Peru"//nation
    , "https://pixabay.com/pt/photos/peru-machu-picchu-lama-2774925/"//link
    ),
    createModal("imgs/taj_mahal.jpg"//path
    , "Foto do Taj Mahal na Índia"//alt
    , 'Taj Mahal'//caption
    , "Índia"//nation
    , "https://pixabay.com/pt/photos/taj-mahal-%C3%ADndia-agra-isl%C3%A2mico-866692/"//link
    ),
    createModal("imgs/muralha_da_china.jpg"//path
    , "Foto do Muralha da China na China"//alt
    , 'Muralha da China'//caption
    , "China"//nation
    , "https://pixabay.com/pt/photos/caminho-marco-montanha-5578851/"//link
    ),
    createModal("imgs/cristo_redentor.jpg"//path
    , "Foto do Cristo Redentor no Brasil"//alt
    , 'Cristo Redentor'//caption
    , "Brasil"//nation
    , "https://pixabay.com/pt/photos/brasil-rio-panorama-turismo-oceano-4809011/"//link
    ),
    createModal("imgs/catedral_de_sao_basílio.jpg"//path
    , "Foto da Catedral de São Basílio na Rússia"//alt
    , 'Catedral de São Basílio'//caption
    , "Rússia"//nation
    , "https://pixabay.com/pt/photos/moscou-torre-spasskaya-3895333/"//link
    ),
    createModal("imgs/lago_peyto.jpg"//path
    , "Foto do Lago Peyto no Canadá"//alt
    , 'Lago Peyto'//caption
    , "Canadá"//nation
    , "https://pixabay.com/pt/photos/peyto-lake-canad%C3%A1-la-lago-alberta-1735606/"//link
    ),
    createModal("imgs/costa_jurassica.jpg"//path
    , "Foto da Costa Jurássica na Inglaterra"//alt
    , 'Costa Jurássica'//caption
    , "Inglaterra"//nation
    , "https://pixabay.com/pt/photos/costa-jur%C3%A1ssica-inglaterra-1400396/"//link
    ),
    createModal("imgs/parque_nacional_yosemite.jpg"//path
    , "Foto do Parque Nacional Yosemite nos Estados Unidos"//alt
    , 'Parque Nacional Yosemite'//caption
    , "Estados Unidos"//nation
    , "https://pixabay.com/pt/photos/yosemite-parque-nacional-cachoeira-2301048/"//link
    ),
    createModal("imgs/cataratas_do_niagara.jpg"//path
    , "Foto das Cataratas do Niágara no Canadá"//alt
    , 'Cataratas do Niágara'//caption
    , "Canadá"//nation
    , "https://pixabay.com/pt/photos/cachoeiras-cataratas-do-ni%C3%A1gara-4484581/"//link
    ),
    createModal("imgs/cataratas_do_iguacu.jpg"//path
    , "Foto das Cataratas do Iguaçu no Brasil"//alt
    , 'Cataratas do Iguaçu'//caption
    , "Brasil"//nation
    , "https://pixabay.com/pt/photos/foz-do-igua%C3%A7u-brasil-cachoeira-3524049/"//link
    ),
    createModal("imgs/torre_de_pisa.jpg"//path
    , "Foto da Torre de Pisa na Itália"//alt
    , 'Torre de Pisa'//caption
    , "Itália"//nation
    , "https://pixabay.com/pt/photos/it%C3%A1lia-tuscany-pisa-3623637/"//link
    ),
]

function addButtons(){
    $('#modal-container').children().each((i, e)=>{
        const lastChildId = $('#modal-container').children().last().attr('id')
        const firstChildId = $('#modal-container').children().first().attr('id')
        const currentId = $(e).attr('id')
        const nextId = $(e).next().attr('id')
        const prevId = $(e).prev().attr('id')
        const footer = $(`#${currentId}`).find('.modal-footer')
        const currentLink = $(footer).find('a')
        
        if(currentId == lastChildId){
            const buttonNext = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${firstChildId}`).attr('data-bs-toggle', 'modal').append('Próximo')
            const prevButton = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${prevId}`).attr('data-bs-toggle', 'modal').append('Anterior')
            $(footer).html([prevButton, currentLink, buttonNext])
        } else if (currentId == firstChildId){
            const buttonNext = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${nextId}`).attr('data-bs-toggle', 'modal').append('Próximo')
            const prevButton = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${lastChildId}`).attr('data-bs-toggle', 'modal').append('Anterior')
            $(footer).html([prevButton, currentLink, buttonNext])
        } else {
            const buttonNext = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${nextId}`).attr('data-bs-toggle', 'modal').append('Próximo')
            const prevButton = $('<button>').addClass(['btn', 'btn-outline-dark']).attr('data-bs-target', `#${prevId}`).attr('data-bs-toggle', 'modal').append('Anterior')
            $(footer).html([prevButton, currentLink, buttonNext])
        }
    })
}

function randomArray(array) {
    var currentIndexLength = array.length
    var temporaryValue, randomIndex
  
    while (0 !== currentIndexLength) {
      randomIndex = Math.floor(Math.random() * currentIndexLength)
      currentIndexLength -= 1
  
      temporaryValue = array[currentIndexLength];
      array[currentIndexLength] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
  
const randomPics = randomArray(pics);
  

onLoadHtmlSuccess(function(){
    randomPics.forEach(e =>{
        $('#pictures').append(e.imgs)
        $('#modal-container').append(e.modals)
    })
    addButtons()
})