'use strict';


angular.module('admissionSystemApp')
.controller('NewProposalCtrl', ['$scope', 'Restangular', 'SpecoffersService',
	function ($scope, Restangular, SpecoffersService) {




   		// **********************************************************************
   		//                      MANAGIN SPECOFFERS DEMO
   		// **********************************************************************

  		// -------------- GET LIST OF SCPECOFFERS-----------------------

	    // var allSpecoffers = SpecoffersService.manageSpecoffers.getSpecoffersList().then(function(offers) {
	    // 	// console.log('offers',offers);
	    // 	offers[0].note = 'my new note';
	    // 	offers[0].put();
	    // });
	    // console.log('allSpecoffers', allSpecoffers);


  		// ----------------POST ONE  NEW SPECOFFER-----------------

  		// $scope.specofferTypesOptions = [
  		var specofferTypesOptions = [
  		{
  			"id": 1,
  			"name": "Молодший спеціаліст на основі базової загальної середньої освіти",
  		},
  		{
  			"id": 2,
  			"name": "Молодший спеціаліст на основі повної загальної середньої освіти",
  		},
  		{
  			"id": 3,
  			"name": "Молодший спеціаліст (зі скороченим терміном навчання)",
  		},
  		{
  			"id": 4,
  			"name": "Молодший спеціаліст (зі скороченим терміном навчання, на 2 курс)",
  		}
  		]
  		$scope.specofferTypesOptions = specofferTypesOptions;

  		var eduFormTypesOptions = [
	  		{
	  			"id": 1,
	  			"name": "денна",
	  		},
	  		{
	  			"id": 2,
	  			"name": "заочна",
	  		},
	  		{
	  			"id": 3,
	  			"name": "екстернат",
	  		},
	  		{
	  			"id": 4,
	  			"name": "вечірня",
	  		},
	  		{
	  			"id": 5,
	  			"name": "дистанційна",
	  		}
  		]
  		$scope.eduFormTypesOptions = eduFormTypesOptions;

  		var specOffer = {};
  		specOffer.specofferTypeId = specofferTypesOptions[0].id;
  		specOffer.eduFormTypeId = eduFormTypesOptions[0].id;
  		$scope.specOffer = specOffer;

  		$scope.$watch('specOffer.specofferTypeId', function (newVal){
  			console.log(newVal);
  		})
		// $scope.$watch('specOffer', function(newNames, oldNames) {
		// 	console.log(newNames);
		// });
  		// $scope.masterSpecOffer = {};


  		var newSpecOffer = {
  			'docSeries': '122211',
  			'docNum': '234333111',
  			'licCount': 14,
  			'stateCount': 14,
  			'departmentId': 44,
  			'eduFormTypeId': 1,
  			'specialtyId': 336,
  			'specofferTypeId': 12,
  			'timePeriodId': 10,
  			'note': 'TEXT',
  			'begDate': '2015-10-01',
  			'endDate': '2020-07-05'
  		}

		// UNCOMMENT FOR DEMO
		// function addSpecOffer (newSpecOffer) {
		// 	return SpecoffersService.manageSpecoffers.addSingleSpecoffer(newSpecOffer);
		// }


  		// -------------UPDATE ONE EXISTING SPECOFFER BY ID---------------------

  		var updatedSpecOffer = {
  			"timePeriodId": 10,
  			"eduFormTypeId": 2,
  			"specofferTypeId": 2,
  			"docSeries": "12345",
  			"docNum": "12345",
  			"begDate": "2015-02-08",
  			"endDate": "2015-02-08",
  			"licCount": 4,
  			"stateCount": 4,
  			"departmentId": 1,
  			"specialtyId": 1,
  			"note": "NEW_NOTE",
  		};
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSpecoffers.updateSingleSpecoffer(updatedSpecOffer, 30);



  		// -------------GET ONE SPECOFFER BY ID-----------------------------
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSpecoffers.getSingleSpecoffer(36).then(function(res){
		// 	console.log("res",res)
		// });


  		// ------------DELETE ONE SPECOFFER BY ID-------------------------------
  		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSpecoffers.deleteSingleSpecoffer(33)




   		// **********************************************************************
   		//                      MANAGING SUBJECTS DEMO
   		// **********************************************************************

  		// ------------ ADD SINGLE SUBJECT TO SPECIFIC SPECOFFER(ID) ---------------
  		var newSubject = {
  			"mark": 3,
  			"isMajor": false,
  			"alternative": false,
  			"weightSubject": 0.9,
  			"specOfferId": 35,
  			"enrolmentSubjectId": 1,
  			"note": "HERE"
  		};
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSubjects.addSingleSubject(35, newSubject);




  		// ------------ GET SINGLE SUBJECT(ID) OF SPECOFFER(ID) --------------------
  		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSubjects.getSingleSubject(34,2).then(function (res) {
			// console.log('specoffers/34/subjects/2', res);
		// });

		// ------------- GET LIST OF SUJECTS USING  SPECOFFER'S ID-----------------------------
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSubjects.getListOfSubjects(36).then(function(res){
			// console.log("specoffers subjects ID 36",res)
		// });

		// ------------- REMOVE SINGLE SUBJECT(ID) OF SPECOFFER(ID)  ----------------------------
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSubjects.removeSingleSubject(36, 6);

		// ------------- UPDATE SINGLE SUBJECT(ID) OF SPECOFFER(ID)  ----------------------------
		var updatedSubject = {
			"mark": 5,
			"isMajor": true,
			"alternative": true,
			"weightSubject": 0.5,
			"specOfferId": 36,
			"enrolmentSubjectId": 1,
			"note": "newNote"
		};
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageSubjects.updateSingleSubject(36, 5, updatedSubject);


   		// **********************************************************************
   		//                      MANAGING BENEFITS DEMO
   		// **********************************************************************

   		// ------------- GET LIST OF BENEFITS USING  SPECOFFER'S ID----------------
   		// UNCOMMENT FOR DEMO
   		// SpecoffersService.manageBenefits.getListOfBenefits(37).then(function (res) {
   			// console.log('benefits', res);
   		// });


   		// ----------------- ADD SINGLE BENEFIT -----------------------------------
   		var newBenefit = {
   			"benefitId": 1,
   			"specOfferId": 37,
   			"note": "new note note"
   		};
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageBenefits.addSingleBenefit(37, newBenefit);

		// ----------------- GET SINGLE BENEFIT -----------------------------------
		// UNCOMMENT FOR DEMO
		// SpecoffersService.manageBenefits.addSingleBenefit(37, 8).then(function (res){
			// console.log('specoffer id-37, benefit id-8', res);
		// });


}]);




