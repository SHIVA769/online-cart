let additem = document.querySelectorAll('.plus')
for (let i = 0; i < additem.length; i++) {
    additem[i].addEventListener(
        'click',
        function () {
            let qty = document.querySelectorAll('.qty')
            qty[i].value++
            let numberCart = document.getElementById('cartqty')
            numberCart.value++
        }
    )
}
let subtractItem = document.querySelectorAll('.subtractItem')
for (let i = 0; i < subtractItem.length; i++) {
    subtractItem[i].addEventListener(
        'click',
        function () {
            let qty = document.querySelectorAll('.qty')
            let numberCart = document.getElementById('cartqty')
            if (qty[i].value > 0 && numberCart.value > 0) {
                qty[i].value--
                numberCart.value--
            }
        }
    )
}
document.getElementById('userr').addEventListener(
    'click',
    function () {
        document.querySelector('.userdata').classList.remove('hidden')
        document.querySelector('.blur').classList.remove('hidden')
    }
)
document.getElementById('bluur').addEventListener(
    'click',
    function () {
        document.querySelector('.userdata').classList.add('hidden')
        document.querySelector('.blur').classList.add('hidden')

    }
)