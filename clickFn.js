(function( $ ){
  $.fn.clickFn = function() {
    const jqname = this[0].id;
    $(this).click(function() {
      $(`img:not(#img-${jqname})`).hide();
      $(`#img-${jqname}`).toggle();
      const rect = document.getElementById(jqname).getBoundingClientRect();
      const x = rect.right;
      const y = rect.top;
      $(`#img-${jqname}`).css({"top": y, "left": x});
      return this;
    })
  }
})( jQuery );

$('#main').clickFn();

$('#small-kit').clickFn();
$('#medium-kit').clickFn();
$('#large-kit').clickFn();
$('#xlarge-kit').clickFn();

$('#bright-white').clickFn();
$('#cloud-gray').clickFn();
$('#cobalt-blue').clickFn();
$('#fluorescent-green').clickFn();
$('#fluorescent-yellow').clickFn();

$('#structural-system').clickFn();
$('#dunnage-bag-large').clickFn();
$('#dunnage-bag-small').clickFn();
$('#sandbag-large').clickFn();
$('#sandbag-small').clickFn();
$('#tarp').clickFn();
$('#caster').clickFn();
$('#3-way-grey').clickFn();
$('#2-way-grey').clickFn();
$('#nuts-bolts').clickFn();
$('#ratchet-strap').clickFn();
$('#shim').clickFn();
$('#sticker').clickFn();
$('#vacuum-formed-panel').clickFn();
$('#tape').clickFn();
$('#foam-roll').clickFn();
$('#jug').clickFn();

$('#small-parts').clickFn();
$('#medium-parts').clickFn();
$('#large-parts').clickFn();

$('#rubber').clickFn();
$('#water').clickFn();
$('#plants').clickFn();
$('#plastics').clickFn();
$('#surface-finishes').clickFn();
$('#text').clickFn();
$('#graphics').clickFn();
$('#machinery').clickFn();
$('#sports').clickFn();
$('#diagrams').clickFn();
$('#games').clickFn();
$('#market').clickFn();
$('#dogs').clickFn();
$('#events').clickFn();
$('#etc').clickFn();

$('#birthday').clickFn();
$('#water-station').clickFn();
$('#bake-sale').clickFn();
$('#performance').clickFn();
$('#info-booth').clickFn();
$('#catering-station').clickFn();
$('#bar').clickFn();
$('#wedding').clickFn();
$('#shop').clickFn();
$('#sandwich-stand').clickFn();
$('#bus-stop').clickFn();
$('#convention-booth').clickFn();
$('#art-booth').clickFn();
$('#fruit-stand').clickFn();
$('#podium').clickFn();
$('#workstation').clickFn();

// takes user to https://stockastudio.com/
$("#go-to").click(function(){
  window.location = "https://stockastudio.com/";
});