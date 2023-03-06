// Objective is to create a counter
let counterElement: Element | null = document.querySelector('p.counter-element');
let counterButton: Element | null = document.querySelector('button.counter-button');
let stopCounter: Element | null = document.querySelector('button.stop-counter');

counterButton?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    if (counterElement?.textContent == null) {
        alert('Element not found')
    } else {
        let initial = Number(counterElement.textContent);
        initial += 1;
        counterElement.textContent = String(initial);
    }
});




