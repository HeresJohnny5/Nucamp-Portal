$(function () {
  // Sidebar Navigation Submenu Accordions
  $("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
  });

  // Sidebar Show/Hide Functionality
  $(".sidebarBtn").on("click", () => {
    $("nav").toggleClass("inactive-sidebar");
    $("main").toggleClass("portion-main");

    if ($("nav").hasClass("inactive-sidebar")) {
      $(".sidebarBtn").html("Show Sidebar");
    } else {
      $(".sidebarBtn").html("Hide Sidebar");
    }
  });
});
