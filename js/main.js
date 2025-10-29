function addItem() {
  const input = document.getElementById('inpt');
  const ul = document.getElementById('list');
  const text = input.value.trim();

  if (text === '') {
    alert(`Iltimos, inputni to‘ldiring`);
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.classList.add('add-btn');

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  button.addEventListener('click', (event) => {
      event.stopPropagation()
    li.remove();
  });

  li.appendChild(button);
  ul.appendChild(li);

  input.value = '';
}
