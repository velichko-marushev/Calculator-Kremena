function demo() {
    const select = document.getElementById('opt')
    const btn = document.getElementById('result')
    const inp = document.getElementById('in')

    btn.addEventListener('click', sum)

    function sum() {
        const selected = select.options[select.selectedIndex].value;
        let dose = 0

        if (selected == 1) {
            dose = "50mg (2.5ml) до 3 пъти дневно за 24 часа"
        } else if (selected == 2) {
            dose = "50mg (2.5ml) до 3-4 пъти дневно за 24 часа"
        } else if (selected == 3) {
            dose = "100mg (5ml) до 3 пъти дневно за 24 часа"
        } else if (selected == 4) {
            dose = "150mg (5ml + 2.5ml) до 3 пъти дневно за 24 часа"
        } else if (selected == 5) {
            dose = "200mg (2 * 5ml) до 3 пъти дневно за 24 часа"
        } else if (selected == 6) {
            dose = "300mg (3 * 5ml) до 3 пъти дневно за 24 часа"
        }
        inp.value = dose
    }
}
export default demo()









