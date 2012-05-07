/* Author:
	Shajed Evan
*/

  $('#alertMSG').collapse('show');
  $('#alertMSG').on('hidden', function () {
    $('#collpseHideState').collapse('show');
  })
  $('#alertMSG').on('shown', function () {
    $('#collpseHideState').collapse('hide');
  })




