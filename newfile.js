const arr = [
  {id: 1, name: 'Rafee', age: 22},
  {id: 2, name: 'arun', age: 30},
  {id: 3, name: 'gokul', age: 25},
];

const tableBody = document.querySelector('#table-data tbody');

arr.forEach(obj => {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${obj.id}</td>
      <td>${obj.name}</td>
      <td>${obj.age}</td>
  `;
  tableBody.appendChild(row);
});
