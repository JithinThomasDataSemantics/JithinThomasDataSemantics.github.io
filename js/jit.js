
function myFunction() {
	//var a ;//=require('url');
   // var z = document.documentURI;
	//var parser = document.createElement('a');
	var url_string =document.documentURI;
	var url = new URL(url_string);
	var c = url.searchParams.get("keywords");
	//var qdata= x.query;
/* 	var x=parser.search;
    var qdata= x.query; */
	/* var y=qdata.keywords;
	var qdata= x.query; */
}
/* 	var data1=1;
var jit1 = {
	initialize : function(dat) {
		if (dat==1)
		{
			data1=0;
		}
		else{
			data1=1;
			
		}
	}
var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; var url = new URL(url_string); var c = url.searchParams.get("c"); console.log(c);
Akhilesh • 1 min

 */
function getToday() {
		var d = new Date();
		
		var n = d.getDate();
		var m = d.getMonth();
		jit.initialize(m,n);
}
var jit = {
    // Application Constructor

		
    initialize: function( m, n) {
		var a = document.getElementById("jit");
		//var d = new Date();
		
		//var n = d.getDate();
		//var m = d.getMonth();
		
		if (m == 0)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href="Saint List/JK/StJosephMaryTomasi.html"
							break; 
							case 2:
									a.href="Saint List/AB/SaintAdelard.html"
							break; 
							case 3:
									a.href="Saint List/FGHI/SaintGenevieve.html"
							break; 
							case 4:
									a.href="Saint List/CDE/StElizabethAnnSeton.html"
							break; 
							case 5:
									a.href="Saint List/CDE/StCharlesSezze.html"        
							break; 
							case 6:
									a.href="Saint List/AB/SaintBalthasar.html"
							break; 
							case 7:
									a.href="Saint List/PQYZ/StRaymondPennafort.html"
							break; 
							case 8:
									a.href="Saint List/AB/StAngelaFoligno.html"
							break; 
							case 9:
									a.href="Saint List/JK/StJulianBasilissa.html"
							break; 
							case 10:
									a.href="Saint List/PQYZ/StWilliamBourges.html"	 		
							break; 
							case 11:
									a.href="Saint List/PQYZ/StTheodosiusCenobriarch.html"
							break; 
							case 12:
									a.href="Saint List/AB/SaintArcadius.html"
							break; 
							case 13:
									a.href="Saint List/FGHI/StHilaryPoitiers.html"  
							break; 
							case 14:
									a.href="Saint List/PQYZ/SaintSava.html"
							break; 
							case 15:
									a.href="Saint List/PQYZ/StPaulHermit.html"
							break; 
							default:
							a.href="Saint List/JK/StJosephMaryTomasi.html";
						}
					}
				else
					{
					switch(n)
						{
							case 16:
							a.href="Saint List/FGHI/SaintFursey.html"
							break; 
							case 17:
							a.href="Saint List/AB/SaintAnthonyPadua.html"
							break; 
							case 18:
							a.href="Saint List/JK/StJaimeHilarioBarbel.html"
							break; 
							case 19:
							a.href="Saint List/PQYZ/StThomasCori.html"
							break; 
							case 20:
							a.href="Saint List/PQYZ/SaintSebastian.html"
							break; 
							case 21:
							a.href="Saint List/AB/StAgnesRome.html"
							break; 
							case 22:
							a.href="Saint List/PQYZ/StVincentPallotti.html" 
							break; 
							case 23:
							a.href="Saint List/LMNO/StMarianneCope.html" 
							break; 
							case 24:
							a.href="Saint List/FGHI/StFrancisSales.html" 
							break; 
							case 25:
							a.href="Saint List/PQYZ/SaintPoppo.html" 
							break; 
							case 26:
							a.href="Saint List/PQYZ/SaintTitus.html" 
							break; 
							case 27:
							a.href="Saint List/AB/StAngelaMerici.html" 
							break; 
							case 28:
							a.href="Saint List/PQYZ/StThomasAquinas.html" 
							break; 
							case 29:
							a.href="Saint List/AB/StAquilinusMilan.html" 
							break; 
							case 30:
							a.href="Saint List/FGHI/StHyacinthaMariscotti.html" 
							break; 
							case 31:
							a.href="Saint List/JK/StJohnBosco.html" 
							break; 
							default:
							a.href="Saint List/JK/StJosephMaryTomasi.html";
						}
					}

			}
		else if (m == 1)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
							a.href="Saint List/AB/StBrigidIreland.html" 
							break; 
							case 2:
							a.href="Saint List/JK/StJoanLestonnac.html" 
							break; 
							case 3:
							a.href="Saint List/AB/SaintBlase.html" 
							break; 
							case 4:
							a.href="Saint List/JK/StJosephLeonisse.html" 
							break; 
							case 5:
							a.href="Saint List/AB/SaintAgatha.html" 
							break; 
							case 6:
							a.href="Saint List/AB/SaintAmand.html" 
							break; 
							case 7:
							a.href="Saint List/LMNO/StLukeYounger.html" 
							break; 
							case 8:
							a.href="Saint List/JK/StJeromeEmiliani.html" 
							break; 
							case 9:
							a.href="Saint List/AB/SaintApollonia.html" 
							break; 
							case 10:
							a.href="Saint List/PQYZ/SaintScholastica.html" 
							break; 
							case 11:
							a.href="Saint List/PQYZ/SaintPaschal.html" 
							break; 
							case 12:
							a.href="Saint List/JK/StJulianHospitaller.html" 
							break; 
							case 13:
							a.href="Saint List/AB/SaintAgabus.html" 
							break; 
							case 14:
							a.href="Saint List/CDE/StCyrilMethodius.html" 
							break; 
							case 15:
							a.href="Saint List/CDE/StClaudeColombiere.html" 
							break; 
							default:
							a.href="Saint List/AB/StBrigidIreland.html";
						}
					}
				else
					{
					switch(n)
						{
							case 16:
							a.href="Saint List/LMNO/SaintOnesimus.html" 
							break; 
							case 17:
							a.href="Saint List/AB/StAlexisFalconieri.html" 
							break; 
							case 18:
							a.href="Saint List/FGHI/StGertrudeCaterinaComensoli.html" 
							break; 
							case 19:
							a.href="Saint List/CDE/StConradPlaisance.html" 
							break; 
							case 20:
							a.href="Saint List/CDE/StEucheriusOrleans.html" 
							break; 
							case 21:
							a.href="Saint List/PQYZ/StPeterDamian.html" 
							break; 
							case 22:
							a.href="Saint List/LMNO/StMargaretCortona.html" 
							break; 
							case 23:
							a.href="Saint List/PQYZ/SaintPolycarp.html" 
							break; 
							case 24:
							a.href="Saint List/LMNO/SaintMontanus.html" 
							break; 
							case 25:
							a.href="Saint List/PQYZ/SaintWalburga.html" 
							break; 
							case 26:
							a.href="Saint List/FGHI/StIsabelFrance.html" 
							break; 
							case 27:
							a.href="Saint List/FGHI/StGabrielPossenti.html" 
							break; 
							case 28:
							a.href="Saint List/FGHI/PopeSaintHilary.html" 
							break; 
							case 29:
							a.href="Saint List/LMNO/SaintOswald.html"
							break; 
							default:
							a.href="Saint List/AB/StBrigidIreland.html";
						}
					}
			}
		else if (m == 2)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
							a.href="Saint List/CDE/StDavidWales.html" 
							break; 
							case 2:
									a.href="Saint List/AB/StAgnesBohemia.html" 
							break; 
							case 3:
									a.href="Saint List/AB/SaintArthelais.html" 
							break; 
							case 4:
									a.href="Saint List/CDE/SaintCasimir.html" 
							break; 
							case 5:
									a.href="Saint List/JK/StJohnJosephCross.html" 
							break; 
							case 6:
									a.href="Saint List/CDE/StColetteCorbie.html" 
							break; 
							case 7:
									a.href="Saint List/PQYZ/SaintPerpetua.html" 
							break; 
							case 8:
									a.href="Saint List/JK/StJohnGod.html" 
							break; 
							case 9:
									a.href="Saint List/FGHI/StFrancesRome.html" 
							break; 
							case 10:
									a.href="Saint List/AB/StAnastasiaPatricia.html" 
							break; 
							case 11:
									a.href="Saint List/CDE/StEulogiusCordoba.html" 
							break; 
							case 12:
									a.href="Saint List/PQYZ/SaintTheophanes.html" 
							break; 
							case 13:
									a.href="Saint List/AB/SaintAnsovinus.html" 
							break; 
							case 14:
									a.href="Saint List/LMNO/SaintMatilda.html" 
							break; 
							case 15:
									a.href="Saint List/LMNO/StLouiseMarillac.html" 
							break; 
							default:
							a.href="Saint List/CDE/StDavidWales.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href="Saint List/FGHI/StFinianLobhar.html" 
							break; 
							case 17:
									a.href="Saint List/FGHI/StGertrudeNivelles.html" 
							break; 
							case 18:
									a.href="Saint List/CDE/StCyrilJerusalem.html" 
							break; 
							case 19:
									a.href="Saint List/JK/SaintJoseph.html" 
							break; 
							case 20:
									a.href="Saint List/PQYZ/SaintPhotina.html" 
							break; 
							case 21:
									a.href="Saint List/LMNO/StNicholasFlue.html" 
							break; 
							case 22:
									a.href="Saint List/AB/SaintBenvenuteOsimo.html" 
							break; 
							case 23:
									a.href="Saint List/PQYZ/StTuribiusMogroveio.html" 
							break; 
							case 24:
									a.href="Saint List/CDE/StCatherineSweden.html" 
							break; 
							case 25:
									a.href="Saint List/CDE/SaintDismas.html" 
							break; 
							case 26:
									a.href="Saint List/LMNO/StMargaretClitherow.html" 
							break; 
							case 27:
									a.href="Saint List/PQYZ/StRupertSalzburg.html" 
							break; 
							case 28:
									a.href="Saint List/PQYZ/StVenturinoBergamo.html" 
							break; 
							case 29:
									a.href="Saint List/AB/SaintBerthold.html" 
							break; 
							case 30:
									a.href="Saint List/PQYZ/StPeterRegalado.html" 
							break; 
							case 31:
									a.href="Saint List/AB/SaintBenjamin.html"   
							break;
							default:
							a.href="Saint List/CDE/StDavidWales.html";
						}
					}
			}
		else if (m == 3)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href="Saint List/FGHI/SaintHughGrenoble.html" 
							break; 
							case 2:
									a.href="Saint List/FGHI/StFrancisPaola.html" 
							break; 
							case 3:
									a.href="Saint List/PQYZ/StRichardChichester.html" 
							break; 
							case 4:
									a.href="Saint List/AB/StBenedictTheMoor.html" 
							break; 
							case 5:
									a.href="Saint List/PQYZ/StVincentFerrer.html" 
							break; 
							case 6:
									a.href="Saint List/CDE/SaintCelestineI.html" 
							break; 
							case 7:
									a.href="Saint List/JK/StJohnBaptistdeSalle.html" 
							break; 
							case 8:
									a.href="Saint List/JK/StJulieBilliart.html" 
							break; 
							case 9:
									a.href="Saint List/CDE/SaintCasilda.html" 
							break; 
							case 10:
									a.href="Saint List/LMNO/StMichaelArgemir.html" 
							break; 
							case 11:
									a.href="Saint List/FGHI/SaintGodeberta.html" 
							break; 
							case 12:
									a.href="Saint List/PQYZ/StZenoVerona.html" 
							break; 
							case 13:
									a.href="Saint List/LMNO/PopeSaintMartinI.html" 
							break; 
							case 14:
									a.href="Saint List/LMNO/StLydwinaSchiedam.html" 
							break; 
							case 15:
									a.href="Saint List/PQYZ/SaintRuadan.html" 
							break; 
							default:
							a.href="Saint List/FGHI/SaintHughGrenoble.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href="Saint List/CDE/SaintDrogo.html" 
							break; 
							case 17:
									a.href="Saint List/CDE/SaintDonan.html" 
							break; 
							case 18:
									a.href="Saint List/AB/StApolloniusApologist.html" 
							break; 
							case 19:
									a.href="Saint List/CDE/SaintExpeditus.html" 
							break; 
							case 20:
									a.href="Saint List/AB/StAgnesMontepulciano.html" 
							break; 
							case 21:
									a.href="Saint List/AB/SaintAnselm.html" 
							break; 
							case 22:
									a.href="Saint List/PQYZ/StTheodoreSykeon.html" 
							break; 
							case 23:
									a.href="Saint List/FGHI/SaintGeorge.html" 
							break; 
							case 24:
									a.href="Saint List/FGHI/StFidelisSigmaringen.html" 
							break; 
							case 25:
									a.href="Saint List/LMNO/SaintMark.html" 
							break; 
							case 26:
									a.href="Saint List/FGHI/StFrancaVisalta.html" 
							break; 
							case 27:
									a.href="Saint List/PQYZ/SaintZita.html"
							break; 
							case 28:
									a.href="Saint List/FGHI/StGiannaBerettaMolla.html"
							break; 
							case 29:
									a.href="Saint List/CDE/StCatherineSiena.html"
							break; 
							case 30:
									a.href="Saint List/AB/SaintAdjutor.html"
							break;
							default:
							a.href="Saint List/FGHI/SaintHughGrenoble.html";
						}
					}
			}
		else if (m == 4)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/PQYZ/SaintPeregrine.html" 
							break; 
							case 2:
									a.href= "Saint List/AB/SaintAthanasius.html" 
							break; 
							case 3:
									a.href= "Saint List/JK/StJamesLess.html" 
							break; 
							case 4:
									a.href= "Saint List/FGHI/SaintFlorian.html" 
							break; 
							case 5:
									a.href= "Saint List/FGHI/StHilaryArles.html" 
							break; 
							case 6:
									a.href= "Saint List/CDE/StDominicSavio.html" 
							break; 
							case 7:
									a.href= "Saint List/PQYZ/StRoseVenerini.html" 
							break; 
							case 8:
									a.href= "Saint List/FGHI/StIdaNivelles.html" 
							break; 
							case 9:
									a.href= "Saint List/FGHI/StGeorgePreca.html" 
							break; 
							case 10:
									a.href= "Saint List/JK/StJohnAvila.html" 
							break; 
							case 11:
									a.href= "Saint List/LMNO/StOdiloCluny.html" 
							break; 
							case 12:
									a.href= "Saint List/PQYZ/SaintPancras.html" 
							break; 
							case 13:
									a.href= "Saint List/PQYZ/SaintServatius.html" 
							break; 
							case 14:
									a.href= "Saint List/AB/StBonifaceTarsus.html" 
							break; 
							case 15:
									a.href= "Saint List/CDE/SaintDymphna.html" 
							break; 
							default:
							a.href="Saint List/PQYZ/SaintPeregrine.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/JK/StJohnNepomucene.html" 
							break; 
							case 17:
									a.href= "Saint List/PQYZ/StPaschalBaylon.html" 
							break; 
							case 18:
									a.href= "Saint List/PQYZ/SaintVenantius.html" 
							break; 
							case 19:
									a.href= "Saint List/FGHI/StIvoKermartin.html" 
							break; 
							case 20:
									a.href= "Saint List/AB/StBernardineSiena.html" 
							break; 
							case 21:
									a.href= "Saint List/CDE/StEugeneMazenod.html" 
							break; 
							case 22:
									a.href= "Saint List/PQYZ/StRitaCascia.html" 
							break; 
							case 23:
									a.href= "Saint List/JK/SaintJulia.html" 
							break; 
							case 24:
									a.href= "Saint List/JK/SaintJoanna.html" 
							break; 
							case 25:
									a.href= "Saint List/LMNO/StMaryMagdalenePazzi.html" 
							break; 
							case 26:
									a.href= "Saint List/PQYZ/StPhilipNeri.html" 
							break; 
							case 27:
									a.href= "Saint List/AB/StAugustineCanterbury.html" 
							break; 
							case 28:
									a.href= "Saint List/AB/StBernardMontjoux.html" 
							break; 
							case 29:
									a.href= "Saint List/AB/StBonaPisa.html" 
							break; 
							case 30:
									a.href= "Saint List/FGHI/StFerdinandIIICastile.html" 
							break; 
							case 31:
									a.href= "Saint List/PQYZ/SaintPetronilla.html"  
							break;
							default:
							a.href="Saint List/PQYZ/SaintPeregrine.html";
						}
					}
			}
		else if (m == 5)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/JK/SaintJustin.html" 
							break; 
							case 2:
									a.href= "Saint List/CDE/SaintErasmus.html" 
							break; 
							case 3:
									a.href= "Saint List/JK/SaintKevin.html" 
							break; 
							case 4:
									a.href= "Saint List/CDE/SaintClotilde.html" 
							break; 
							case 5:
									a.href= "Saint List/AB/StBonifaceMainz.html" 
							break; 
							case 6:
									a.href= "Saint List/LMNO/SaintNorbert.html" 
							break; 
							case 7:
									a.href= "Saint List/FGHI/SaintGotteschalk.html" 
							break; 
							case 8:
									a.href= "Saint List/PQYZ/StWilliamYork.html" 
							break; 
							case 9:
									a.href= "Saint List/CDE/SaintColumba.html" 
							break; 
							case 10:
									a.href= "Saint List/LMNO/SaintLandericus.html" 
							break; 
							case 11:
									a.href= "Saint List/AB/SaintBarnabas.html" 
							break; 
							case 12:
									a.href= "Saint List/JK/StJohnSahagun.html" 
							break; 
							case 13:
									a.href= "Saint List/AB/SaintAnthonyPadua.html" 
							break; 
							case 14:
									a.href= "Saint List/PQYZ/StValeriusRufinus.html" 
							break; 
							case 15:
									a.href= "Saint List/FGHI/SaintGermaine.html" 
							break; 
							default:
							a.href="Saint List/JK/SaintJustin.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/JK/StJohnFrancisRegis.html" 
							break; 
							case 17:
									a.href= "Saint List/FGHI/SaintHerve.html" 
							break; 
							case 18:
									a.href= "Saint List/CDE/StElizabethSchoenau.html" 
							break; 
							case 19:
									a.href= "Saint List/FGHI/StGervasiusProtasius.html" 
							break; 
							case 20:
									a.href= "Saint List/AB/StAdalbertMagdeburg.html" 
							break; 
							case 21:
									a.href= "Saint List/AB/StAloysiusGonzaga.html" 
							break; 
							case 22:
									a.href= "Saint List/PQYZ/StThomasMore.html" 
							break; 
							case 23:
									a.href= "Saint List/JK/StJosephCafasso.html" 
							break; 
							case 24:
									a.href= "Saint List/JK/StJohnBaptist.html" 
							break; 
							case 25:
									a.href= "Saint List/CDE/SaintEurosia.html" 
							break; 
							case 26:
									a.href= "Saint List/JK/StJosemariaEscrivaBalaguer.html" 
							break; 
							case 27:
									a.href= "Saint List/CDE/StCyrilAlexandria.html" 
							break; 
							case 28:
									a.href= "Saint List/FGHI/SaintIrenaeus.html" 
							break; 
							case 29:
									a.href= "Saint List/PQYZ/SaintPeter.html" 
							break; 
							case 30:
									a.href= "Saint List/PQYZ/StPeterChrysologus.html"   
							break; 
							default:
							a.href="Saint List/JK/SaintJustin.html";
						}
					}
			}
		else if (m == 6)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/FGHI/SaintGall.html" 
							break; 
							case 2:
									a.href= "Saint List/AB/StBernardinoRealino.html" 
							break; 
							case 3:
									a.href= "Saint List/PQYZ/SaintThomas.html" 
							break; 
							case 4:
									a.href= "Saint List/CDE/StElizabethPortugal.html" 
							break; 
							case 5:
									a.href= "Saint List/CDE/StAnthonyZaccaria.html" 
							break; 
							case 6:
									a.href= "Saint List/LMNO/StMariaGoretti.html" 
							break; 
							case 7:
									a.href= "Saint List/PQYZ/SaintPalladius.html" 
							break; 
							case 8:
									a.href= "Saint List/JK/SaintKillian.html" 
							break; 
							case 9:
									a.href= "Saint List/PQYZ/StVeronicaGiuliani.html" 
							break; 
							case 10:
									a.href= "Saint List/AB/StAmalbergaTemse.html" 
							break; 
							case 11:
									a.href= "Saint List/AB/SaintBenedict.html" 
							break; 
							case 12:
									a.href= "Saint List/JK/StJohnGaulbert.html" 
							break; 
							case 13:
									a.href= "Saint List/FGHI/StFrancisSolano.html" 
							break; 
							case 14:
									a.href= "Saint List/JK/StKateriTekakwitha.html" 
							break; 
							case 15:
									a.href= "Saint List/AB/SaintBonaventure.html" 
							break; 
							default:
							a.href= "Saint List/FGHI/SaintGall.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/LMNO/StMaryMagdalenPostel.html" 
							break; 
							case 17:
									a.href= "Saint List/CDE/SaintCharbel.html" 
							break; 
							case 18:
									a.href= "Saint List/CDE/StCamillusdeLellis.html" 
							break; 
							case 19:
									a.href= "Saint List/LMNO/StMacrinaYounger.html" 
							break; 
							case 20:
									a.href= "Saint List/LMNO/StMargaretAntioch.html" 
							break; 
							case 21:
									a.href= "Saint List/LMNO/StLawrenceBrindisi.html" 
							break; 
							case 22:
									a.href= "Saint List/LMNO/StMaryMagdalene.html" 
							break; 
							case 23:
									a.href= "Saint List/AB/SaintBridgetSweden.html" 
							break; 
							case 24:
									a.href= "Saint List/JK/StKingaPoland.html" 
							break; 
							case 25:
									a.href= "Saint List/CDE/SaintChristopher.html" 
							break; 
							case 26:
									a.href= "Saint List/AB/SaintAnne.html" 
							break; 
							case 27:
									a.href= "Saint List/PQYZ/SaintPantaleon.html" 
							break; 
							case 28:
									a.href= "Saint List/AB/SaintAlphonsa.html" 
							break; 
							case 29:
									a.href= "Saint List/LMNO/SaintMartha.html" 
							break; 
							case 30:
									a.href= "Saint List/AB/StAbdonSennen.html" 
							break; 
							case 31:
									a.href= "Saint List/LMNO/SaintNeot.html" 
							break;
							default:
							a.href= "Saint List/FGHI/SaintGall.html" ;
						}
					}
			}
		else if (m == 7)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/AB/StAlphonsusLiguori.html" 
							break; 
							case 2:
									a.href= "Saint List/CDE/StEusebiusVercelli.html" 
							break; 
							case 3:
									a.href= "Saint List/LMNO/StLydiaPurpuraria.html" 
							break; 
							case 4:
									a.href= "Saint List/JK/StJohnVianney.html" 
							break; 
							case 5:
									a.href= "Saint List/CDE/SaintEmygdius.html" 
							break; 
							case 6:
									a.href= "Saint List/AB/SaintAgapitus.html" 
							break; 
							case 7:
									a.href= "Saint List/CDE/SaintCajetan.html" 
							break; 
							case 8:
									a.href= "Saint List/CDE/SaintDominic.html" 
							break; 
							case 9:
									a.href= "Saint List/CDE/StEdithStein.html" 
							break; 
							case 10:
									a.href= "Saint List/LMNO/StLawrenceRome.html" 
							break; 
							case 11:
									a.href= "Saint List/AB/StAlexanderCharcoalBurner.html" 
							break; 
							case 12:
									a.href= "Saint List/JK/StJeanneChantal.html" 
							break; 
							case 13:
									a.href= "Saint List/JK/StJohnBerchmans.html" 
							break; 
							case 14:
									a.href= "Saint List/PQYZ/StMaximillianKolbe.html" 
							break; 
							case 15:
									a.href= "Saint List/PQYZ/SaintTarcisius.html" 
							break; 
							default:
									a.href= "Saint List/AB/StAlphonsusLiguori.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/PQYZ/SaintRoch.html" 
							break; 
							case 17:
									a.href= "Saint List/PQYZ/StPaulJuliana.html" 
							break; 
							case 18:
									a.href= "Saint List/FGHI/SaintHelena.html" 
							break; 
							case 19:
									a.href= "Saint List/JK/StJohnEudes.html" 
							break; 
							case 20:
									a.href= "Saint List/AB/StBernardClairvaux.html" 
							break; 
							case 21:
									a.href= "Saint List/PQYZ/PopeSaintPiusX.html" 
							break; 
							case 22:
									a.href= "Saint List/AB/StAndrewScot.html" 
							break; 
							case 23:
									a.href= "Saint List/PQYZ/StRoseLima.html" 
							break; 
							case 24:
									a.href= "Saint List/AB/SaintBartholomew.html" 
							break; 
							case 25:
									a.href= "Saint List/FGHI/SaintGenesius.html" 
							break; 
							case 26:
									a.href= "Saint List/PQYZ/StTeresaJesusJornetIbars.html" 
							break; 
							case 27:
									a.href= "Saint List/LMNO/SaintMonica.html" 
							break; 
							case 28:
									a.href= "Saint List/AB/StAugustineHippo.html" 
							break; 
							case 29:
									a.href= "Saint List/PQYZ/SaintSabina.html" 
							break; 
							case 30:
									a.href= "Saint List/JK/StJeanneJugan.html" 
							break; 
							case 31:
									a.href= "Saint List/PQYZ/StRaymondNonnatus.html"   
							break; 		
							default:
									a.href= "Saint List/AB/StAlphonsusLiguori.html" ;
						}
					}
			}
		else if (m == 8)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/FGHI/SaintFiacre.html" 
							break; 
							case 2:
									a.href= "Saint List/AB/StAgricolaAvignon.html" 
							break; 
							case 3:
									a.href= "Saint List/FGHI/StGregoryGreat" 
							break; 
							case 4:
									a.href= "Saint List/PQYZ/StRoseViterbo.html" 
							break; 
							case 5:
									a.href= "Saint List/PQYZ/StTeresaCalcutta.html" 
							break; 
							case 6:
									a.href= "Saint List/LMNO/StMagnusFussen.html" 
							break; 
							case 7:
									a.href= "Saint List/FGHI/StGratusAosta.html" 
							break; 
							case 8:
									a.href= "Saint List/CDE/SaintCorbinian.html" 
							break; 
							case 9:
									a.href= "Saint List/PQYZ/StPeterClaver.html" 
							break; 
							case 10:
									a.href= "Saint List/FGHI/StFrancisMorales.html" 
							break; 
							case 11:
									a.href= "Saint List/PQYZ/StProtusHyacinth.html" 
							break; 
							case 12:
									a.href= "Saint List/FGHI/StGuyAnderlecht.html" 
							break; 
							case 13:
									a.href= "Saint List/CDE/StJohnChrysostom.html" 
							break; 
							case 14:
									a.href= "Saint List/LMNO/SaintNotburga.html" 
							break; 
							case 15:
									a.href= "Saint List/CDE/StCatherineGenoa.html" 
							break; 
							default:
									a.href= "Saint List/FGHI/SaintFiacre.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/CDE/StCornelius.html" 
							break; 
							case 17:
									a.href= "Saint List/PQYZ/StRobertBellarmine.html" 
							break; 
							case 18:
									a.href= "Saint List/JK/StJosephCupertino.html" 
							break; 
							case 19:
									a.href= "Saint List/JK/SaintJanuarius.html" 
							break; 
							case 20:
									a.href= "Saint List/CDE/SaintEustachius.html" 
							break; 
							case 21:
									a.href= "Saint List/LMNO/StMatthew.html" 
							break; 
							case 22:
									a.href= "Saint List/LMNO/SaintMaurice.html" 
							break; 
							case 23:
									a.href= "Saint List/PQYZ/StPadrePio.html" 
							break; 
							case 24:
									a.href= "Saint List/PQYZ/StPacificSanSeverino.html" 
							break; 
							case 25:
									a.href= "Saint List/CDE/StCadocLlancarvan.html" 
							break; 
							case 26:
									a.href= "Saint List/CDE/StCosmasDamian.html" 
							break; 
							case 27:
									a.href= "Saint List/PQYZ/StVincentDePaul.html" 
							break; 
							case 28:
									a.href= "Saint List/PQYZ/SaintWenceslaus.html" 
							break; 
							case 29:
									a.href= "Saint List/LMNO/SaintMichael.html" 
							break; 
							case 30:
									a.href= "Saint List/JK/SaintJerome.html"  
							break; 
							default:
									a.href= "Saint List/FGHI/SaintFiacre.html" ;
						}
					}
			}
		else if (m == 9)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/PQYZ/StThereseLisuex.html" 
							break; 
							case 2:
									a.href= "Saint List/LMNO/SaintLeger.html" 
							break; 
							case 3:
									a.href= "Saint List/FGHI/StGerardBrogne.html" 
							break; 
							case 4:
									a.href= "Saint List/FGHI/StFrancisAssisi.html" 
							break; 
							case 5:
									a.href= "Saint List/FGHI/SaintFaustina.html" 
							break; 
							case 6:
									a.href= "Saint List/AB/SaintBruno.html" 
							break; 
							case 7:
									a.href= "Saint List/JK/StJustinaPadua.html" 
							break; 
							case 8:
									a.href= "Saint List/PQYZ/SaintPelagia.html" 
							break; 
							case 9:
									a.href= "Saint List/CDE/StDionysiusAeropagite.html" 
							break; 
							case 10:
									a.href= "Saint List/FGHI/StFrancisBorgia.html" 
							break; 
							case 11:
									a.href= "Saint List/FGHI/SaintGummarus.html" 
							break; 
							case 12:
									a.href= "Saint List/CDE/StEdwinNorthumbria.html" 
							break; 
							case 13:
									a.href= "Saint List/FGHI/StGeraldAurillac.html" 
							break; 
							case 14:
									a.href= "Saint List/PQYZ/SaintParasceva.html" 
							break; 
							case 15:
									a.href= "Saint List/PQYZ/StTeresaAvila.html" 
							break; 
							default:
									a.href= "Saint List/PQYZ/StThereseLisuex.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/FGHI/StGerardMajella.html" 
							break; 
							case 17:
									a.href= "Saint List/LMNO/StMargaretMaryAlacoque.html" 
							break; 
							case 18:
									a.href= "Saint List/LMNO/SaintLuke.html" 
							break; 
							case 19:
									a.href= "Saint List/FGHI/StIsaacJoguesCompanions.html" 
							break; 
							case 20:
									a.href= "Saint List/PQYZ/StPaulCross.html" 
							break; 
							case 21:
									a.href= "Saint List/PQYZ/SaintUrsula.html" 
							break; 
							case 22:
									a.href= "Saint List/JK/StJohnPaulII.html" 
							break; 
							case 23:
									a.href= "Saint List/JK/StJohnCapistrano.html" 
							break; 
							case 24:
									a.href= "Saint List/AB/StAnthonyMaryClaret.html" 
							break; 
							case 25:
									a.href= "Saint List/CDE/StCrispinCrispinian.html" 
							break; 
							case 26:
									a.href= "Saint List/AB/StAlfredGreat.html" 
							break; 
							case 27:
									a.href= "Saint List/AB/StAbrahamPoor.html" 
							break; 
							case 28:
									a.href= "Saint List/JK/SaintJude.html" 
							break; 
							case 29:
									a.href= "Saint List/LMNO/SaintNarcissus.html" 
							break; 
							case 30:
									a.href= "Saint List/LMNO/SaintMarcellus.html" 
							break; 
							case 31:
									a.href= "Saint List/PQYZ/SaintQuentin.html"   
							break; 
							default:
									a.href= "Saint List/PQYZ/StThereseLisuex.html" ;
						}
					}
			}
		else if (m == 10)
			
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/CDE/StCaesariusAfrica.html" 
							break; 
							case 2:
									a.href= "Saint List/AB/SaintAgathonicus.html" 
							break; 
							case 3:
									a.href= "Saint List/LMNO/StMartindePorres.html" 
							break; 
							case 4:
									a.href= "Saint List/CDE/StCharlesBorromeo.html" 
							break; 
							case 5:
									a.href= "Saint List/CDE/SaintElizabeth.html" 
							break; 
							case 6:
									a.href= "Saint List/LMNO/StLeonardNoblac.html" 
							break; 
							case 7:
									a.href= "Saint List/PQYZ/SaintWillibrord.html" 
							break; 
							case 8:
									a.href= "Saint List/CDE/SaintCybi.html" 
							break; 
							case 9:
									a.href= "Saint List/AB/SaintBenignus.html" 
							break; 
							case 10:
									a.href= "Saint List/AB/StAndrewAvellino.html" 
							break; 
							case 11:
									a.href= "Saint List/LMNO/StMartinTours.html" 
							break; 
							case 12:
									a.href= "Saint List/JK/SaintJosaphat.html" 
							break; 
							case 13:
									a.href= "Saint List/FGHI/SaintHomobonus.html" 
							break; 
							case 14:
									a.href= "Saint List/LMNO/StLawrenceOToole.html" 
							break; 
							case 15:
									a.href= "Saint List/AB/StAlbertGreat.html" 
							break; 
							default:
									a.href= "Saint List/CDE/StCaesariusAfrica.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/AB/SaintAgnesOfAssisi.html" 
							break; 
							case 17:
									a.href= "Saint List/CDE/StElizabethHungary.html" 
							break; 
							case 18:
									a.href= "Saint List/LMNO/StOdoCluny.html" 
							break; 
							case 19:
									a.href= "Saint List/AB/SaintBarlaam.html" 
							break; 
							case 20:
									a.href= "Saint List/CDE/StEdmundEastAnglia.html" 
							break; 
							case 21:
									a.href= "Saint List/AB/StAlbertLouvain.html" 
							break; 
							case 22:
									a.href= "Saint List/CDE/SaintCecilia.html" 
							break; 
							case 23:
									a.href= "Saint List/FGHI/SaintFelicityRome.html" 
							break; 
							case 24:
									a.href= "Saint List/AB/StAndrewDungLac.html" 
							break; 
							case 25:
									a.href= "Saint List/CDE/StCatherineAlexandria.html" 
							break; 
							case 26:
									a.href= "Saint List/LMNO/StLeonardPortMaurice.html" 
							break; 
							case 27:
									a.href= "Saint List/PQYZ/SaintVirgilius.html" 
							break; 
							case 28:
									a.href= "Saint List/JK/StJamesMarch.html" 
							break; 
							case 29:
									a.href= "Saint List/PQYZ/SaintSaturninus.html" 
							break; 
							case 30:
									a.href= "Saint List/AB/SaintAndrew.html"  
							break; 
							default:
									a.href= "Saint List/CDE/StCaesariusAfrica.html" ;
						}
					}
			}
		else 
			{ 
				if (n < 16)
					{
						switch(n)
						{
							case 1:
									a.href= "Saint List/CDE/SaintEligius.html" 
							break; 
							case 2:
									a.href= "Saint List/AB/SaintBibiana.html" 
							break; 
							case 3:
									a.href= "Saint List/FGHI/StFrancisXavier.html" 
							break; 
							case 4:
									a.href= "Saint List/AB/SaintBarbara.html" 
							break; 
							case 5:
									a.href= "Saint List/PQYZ/SaintSabas.html" 
							break; 
							case 6:
									a.href= "Saint List/LMNO/StNicholasMyra.html" 
							break; 
							case 7:
									a.href= "Saint List/AB/SaintAmbrose.html" 
							break; 
							case 8:
									a.href= "Saint List/PQYZ/StPatapiusThebes.html" 
							break; 
							case 9:
									a.href= "Saint List/JK/StJuanDiego.html" 
							break; 
							case 10:
									a.href= "Saint List/PQYZ/StPolydorePlasden.html" 
							break; 
							case 11:
									a.href= "Saint List/CDE/PopeStDamasusI.html" 
							break; 
							case 12:
									a.href= "Saint List/CDE/StColumbaTerryglass.html" 
							break; 
							case 13:
									a.href= "Saint List/LMNO/SaintLucy.html" 
							break; 
							case 14:
									a.href= "Saint List/JK/StJohnCross.html" 
							break; 
							case 15:
									a.href= "Saint List/LMNO/StMaryDiRosa.html" 
							break; 

							default:
									a.href= "Saint List/CDE/SaintEligius.html" ;
						}
					}
				else
					{
					switch(n)
						{
							case 16:
									a.href= "Saint List/AB/SaintAdelaide.html" 
							break; 
							case 17:
									a.href= "Saint List/JK/StJohnDeMartha.html" 
							break; 
							case 18:
									a.href= "Saint List/PQYZ/SaintWinebald.html" 
							break; 
							case 19:
									a.href= "Saint List/AB/StAnastasiusI.html" 
							break; 
							case 20:
									a.href= "Saint List/CDE/StDominicSilos.html" 
							break; 
							case 21:
									a.href= "Saint List/PQYZ/StPeterCanisius.html" 
							break; 
							case 22:
									a.href= "Saint List/FGHI/SaintHunger.html" 
							break; 
							case 23:
									a.href= "Saint List/JK/StJohnCantiuss.html" 
							break; 
							case 24:
									a.href= "Saint List/CDE/SaintDelphinus.html" 
							break; 
							case 25:
									a.href= "Saint List/AB/StAnastasiaIII.html" 
							break; 
							case 26:
									a.href= "Saint List/PQYZ/SaintStephen.html" 
							break; 
							case 27:
									a.href= "Saint List/JK/StJohnApostle.html" 
							break; 
							case 28:
									a.href= "Saint List/FGHI/HolyInnocents.html" 
							break; 
							case 29:
									a.href= "Saint List/PQYZ/StThomasBecket.html" 
							break; 
							case 30:
									a.href= "Saint List/CDE/SaintEgwin.html" 
							break; 
							case 31:
									a.href= "Saint List/PQYZ/SaintSylvester.html"    
							break;
							default:
									a.href= "Saint List/CDE/SaintEligius.html" ;
						}
					}
			}				
/* 		a.href="February.html"; */
     /*    return "January.html"; */
    }
	
};
