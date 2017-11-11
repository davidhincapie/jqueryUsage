console.log($('a').attr('href'));

//opening page in new tab
$('a').not('[href*="my-domain.com"]').attr("target", "_blank");

$('button').on('click', () => {
  $('a').attr('href', 'https://yahoo.com/');
  console.log($('a').attr('href'));
});