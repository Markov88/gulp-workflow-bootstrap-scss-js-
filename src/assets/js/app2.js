$('#btn').click(function () {
       alert('Hello from app2')
      });


       // Init tooltips
    $('[data-toggle="tooltip"]').tooltip();

    function showTooltip() {
      $('#hello').tooltip('show');
    }

    function hideTooltip() {
      $('#hello').tooltip('hide');
    }

    function toggleTooltip() {
      $('#hello').tooltip('toggle');
    }

    // Tooltip Events
    $('#hello').on('show.bs.tooltip', function () {
      console.log('Tooltip Show');
    });

    $('#hello').on('shown.bs.tooltip', function () {
      console.log('Tooltip Shown');
    });

    $('#hello').on('hide.bs.tooltip', function () {
      console.log('Tooltip Hide');
    });

    $('#hello').on('hidden.bs.tooltip', function () {
      console.log('Tooltip Hidden');
    });
    $('[data-toggle="popover"]').popover();

    function showPopover() {
      $('#hello').popover('show');
    }

    function hidePopover() {
      $('#hello').popover('hide');
    }

    function togglePopover() {
      $('#hello').popover('toggle');
    }

    // Popover events
    $('#hello').on('show.bs.popover', function () {
      console.log('Popover show');
    });

    $('#hello').on('shown.bs.popover', function () {
      console.log('Popover shown');
    });

    $('#hello').on('hide.bs.popover', function () {
      console.log('Popover hide');
    });

    $('#hello').on('hidden.bs.popover', function () {
      console.log('Popover hidden');
    });
  