const items= [
    {
        id:0,
        nome:'Lingerie',
        
        quantidade:0,
    }
    ,
    {
        id:1,
        nome:'Lingerie1',
    
        quantidade:0,
    },
    {
        id:2,
        nome:'Lingerie2',
     
        quantidade:0,
    }




]

function iniciarloja(){
    let containerprodutos= document.getElementById('produtos');
    items.map((val)=>{
        console.console.log(val.nome);
    })
}
iniciarloja();