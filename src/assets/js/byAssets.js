function byAssets(wrapper, source){
    root(wrapper, source, 0, '0', [])
    document.querySelector('[thisID="x0"]').style.display = 'block'
}

function root(wrapper, src, thisLVL, thisID, thisWBS ){
    const elem = document.createElement('div');
    elem.classList.add('hiden')
    elem.classList.add('collapse')
    wrapper.appendChild(elem)

    elem.textContent = `${src['assetNumber']} ${src['description']} : ${src['raised number']}`;
    elem.style.height = '30px';
    elem.style.width = '500px';
    elem.style.backgroundColor = ['gray', 'aqua', 'cyan', 'skyblue', 'wheat', 'azure', 'lavender', 'beige', 'plum'][thisLVL]
    elem.style.transform = `translateX(${thisLVL*20}px)`

    elem.setAttribute('thisID', `x${thisID}`)
    elem.setAttribute('thisLVL', thisLVL)

    for(let c in thisWBS){
        elem.classList.add(thisWBS[c])
    };
    
    elem.addEventListener('click', (event)=>{
        const targ = event.target;
        const nodeID = targ.getAttribute('thisID');
        const nodeLVL = Number(targ.getAttribute('thisLVL'));

        targ.classList.toggle('collapse')      

        let children;
        if (targ.classList.contains('collapse')){
            children = document.querySelectorAll(`.${nodeID}`)
            for (let i=0; i < children.length; i++) {
                children[i].classList.add('hiden')
            }
        } else {
            children = document.querySelectorAll(`[thisLVL="${nodeLVL+1}"].${nodeID}`)      
        for (let i=0; i < children.length; i++) {
            children[i].classList.remove('hiden')
        } }
    })

    for (let prop in src){
        if (['description', 'assetNumber', 'raised number'].includes(prop)) continue
        let childWBS = [...thisWBS, `x${thisID}`];
        root(wrapper, src[prop], thisLVL+1, prop, childWBS)
    }
}



export {byAssets}