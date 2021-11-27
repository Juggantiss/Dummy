var DataTb = null;
// var data = [
//   {
//     nombre: "cinere",
//     fecha: [
//       {
//         año: 2018,
//         ventasAnterior: 0,
//         ventasTotales: 10,
//         diferencia: 0,
//         crecimiento: 0,
//       },
//       {
//         año: 2019,
//         ventasAnterior: 10,
//         ventasTotales: 20,
//         diferencia: 10,
//         crecimiento: 100,
//       },
//       {
//         año: 2020,
//         ventasAnterior: 20,
//         ventasTotales: 10,
//         diferencia: -10,
//         crecimiento: 0,
//       },
//       {
//         año: 2021,
//         ventasAnterior: 10,
//         ventasTotales: 30,
//         diferencia: 40,
//         crecimiento: 150,
//       },
//     ],
//   },
//   {
//     nombre: "fixTech",
//     fecha: [
//       {
//         año: 2018,
//         ventasAnterior: 0,
//         ventasTotales: 10,
//         diferencia: 0,
//         crecimiento: 0,
//       },

//       {
//         año: 2019,
//         ventasAnterior: 10,
//         ventasTotales: 20,
//         diferencia: 10,
//         crecimiento: 100,
//       },
//       {
//         año: 2020,
//         ventasAnterior: 20,
//         ventasTotales: 10,
//         diferencia: -10,
//         crecimiento: 0,
//       },
//       {
//         año: 2021,
//         ventasAnterior: 10,
//         ventasTotales: 30,
//         diferencia: 40,
//         crecimiento: 150,
//       },
//     ],
//   },
// ];
// var data = [
//   {
//     nombre: "cinere",
//     fecha: [
//       {
//         año: 2018,
//         ventasAnterior: 0,
//         ventasTotales: 10,
//         diferencia: 0,
//         crecimiento: 0,
//       },
//       {
//         año: 2019,
//         ventasAnterior: 10,
//         ventasTotales: 20,
//         diferencia: 10,
//         crecimiento: 100,
//       },
//       {
//         año: 2020,
//         ventasAnterior: 20,
//         ventasTotales: 10,
//         diferencia: -10,
//         crecimiento: 0,
//       },
//       {
//         año: 2021,
//         ventasAnterior: 10,
//         ventasTotales: 30,
//         diferencia: 40,
//         crecimiento: 150,
//       },
//     ],
//   },
// ];
var data = [
  {
    año: 2018,
    ventasAnterior: 0,
    ventasTotales: 10,
    diferencia: 0,
    crecimiento: 0,
  },
  {
    año: 2019,
    ventasAnterior: 10,
    ventasTotales: 20,
    diferencia: 10,
    crecimiento: 100,
  },
  {
    año: 2020,
    ventasAnterior: 20,
    ventasTotales: 10,
    diferencia: -10,
    crecimiento: 0,
  },
  {
    año: 2021,
    ventasAnterior: 10,
    ventasTotales: 30,
    diferencia: 40,
    crecimiento: 150,
  },
];
var titles = [
  { title: "Años", targets: 0 },
  { title: "Ventas anteriores", targets: 1 },
  { title: "Ventas totales", targets: 2 },
  { title: "Diferencia", targets: 3 },
  { title: "Crecimiento", targets: 4 },
];
var columns = [
  { data: "año" },
  { data: "ventasAnterior" },
  { data: "ventasTotales" },
  { data: "diferencia" },
  { data: "crecimiento" },
];
$(document).ready(function () {
  DataTb = $("#DataTb");
  fillTable(data);
});
$("#btn").click(function () {
  $("#DataTb").remove();
  $("#table_section").append(
    `<table
        id="DataTb"
        class="row-border hover order-column"
        style="width: 100%"
      ></table>`
  );
  DataTb = $("#DataTb");
  var newData = [];
  var newTitles = titles;
  var newColumns = columns;
  data.forEach((element) => {
    newData.push({ ...element, empresa: "Cinere" });
  });
  titles.push({ title: "Empresa", targets: 5 });
  columns.push({ data: "empresa" });
  console.log(newData);
  console.log(newTitles);
  console.log(newColumns);
  fillTable(newData);
});

function fillTable(data) {
  console.log(data);
  console.log(titles);
  console.log(columns);
  console.log("----------------------------");
  var table = DataTb.DataTable({
    destroy: true,
    ordering: false,
    info: false,
    data: data,
    columns,
    columnDefs: titles,
  });
  $(`<a class="toggle-vis" data-column="0" style="
                border: 2px solid black;
                padding-left: 4px;
                padding-right: 4px;
                font-weight: bold;
                cursor: pointer;
              ">+</a>`)
    .clone(true)
    .appendTo("#DataTb thead");
  $(".toggle-vis").on("click", function (e) {
    alert("Me han presionado");
  });
  // $("#DataTb thead tr").clone(true).appendTo("#DataTb thead");
  // $("#DataTb thead tr:eq(1) th").each(function (i) {
  //   $(this).html('<a class="toggle-vis" data-column="0">+</a>');
  //   $(".toggle-vis", this).on("click", function (e) {
  //     e.preventDefault();
  //     var column = table.column($(this).attr("data-column"));
  //     column.visible(!column.visible);
  //   });
  // });
}
