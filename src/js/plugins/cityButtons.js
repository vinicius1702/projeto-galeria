import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterBynation(nation){
    $('[wm-nation]').each(function (i, e) {
        const isTarget = $(this).attr('wm-nation') === nation || nation === null
        if(isTarget){
            $(this).fadeIn(duration).parent().removeClass('d-none')
        } else {
            $(this).fadeOut(duration).parent().addClass('d-none')
        }
    })
}

function unselectedBtn(selectedBtn){
    $('button').each((i, e) => {
        if(e !== selectedBtn) {
            $(e).removeClass('active')
        }
    })
}

$.fn.nationButtons = function(){
    const nations = new Set
    $('[wm-nation]').each(function(i, e){
        nations.add($(e).attr('wm-nation'))
    })
    
    const btns = Array.from(nations).map(nation => {
        const btn = $('<button>').addClass(['btn', 'btn-outline-dark', 'fs-6', 'm-1', 'p-0', 'flex-grow-1', 'btn-sm']).html(nation)
        btn.on('click', function (e) {
            filterBynation(nation)
            $(this).addClass('active')
            unselectedBtn(this)
        })
        return btn
    })
    
    const btnAll = $('<button>').addClass(['btn', 'btn-outline-dark', 'active', 'fs-6', 'm-1', 'p-0', 'flex-grow-1', 'btn-sm']).html('Todas')
    btnAll.on('click', function (e) {
        filterBynation(null)
        $(this).addClass('active')
        unselectedBtn(this)
    })
    btns.push(btnAll)
    
    const btnGroup = $('<div>').addClass(['d-flex', 'flex-wrap', 'flex-grow-1'])
    btnGroup.append(btns)
    
    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function(){
    $('[wm-nation-buttons]').nationButtons()
})