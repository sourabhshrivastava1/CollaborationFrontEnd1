'use strict';

app
		.factory(
				'friendService',
				[
						'$http',
						'$q',
						'$rootScope',
						function($http, $q, $rootScope) {

							console.log("FriendService...")

							var BASE_URL = 'http://localhost:8089/CollaborationRestFullService'
							return {

								sendRequest : function(id) {
									console.log('Enter into save friend ' + id)
									return $http
											.get(BASE_URL + '/addFriend/' + id)
											.then(
													function(response) {
														if (response.data.errorCode == 404) {
															alert(response.data.errorMessage)
														}
														return response.data;
													},
													function(errResponse) {
														console
																.error('Error while creating friend');
														return $q
																.reject(errResponse);
													});
								},
								getMyFriendRequests : function() {
									return $http
											.get(
													BASE_URL
															+ '/getMyFriendRequests/')
											.then(
													function(response) {
														// alert("success")
														// alert(response.data)
														return response.data;
													},
													function(errResponse) {
														console
																.error('Error while creating friend');
														return $q
																.reject(errResponse);
													});
								},
								getMyFriends : function() {
									return $http.get(BASE_URL + '/myFriends')
											.then(function(response) {
												return response.data;
												alert(response.data)
											}, null);
								},

								acceptFriendRequests : function(friendID) {
									console
											.log("Starting of the method acceptFriendRequest")
									return $http
											.put(
													BASE_URL
															+ '/accepttFriend/'
															+ friendID)
											.then(
													function(response) {
														//alert('success')
														return response.data;
													},
													function(errResponse) {
														console
																.error('Error while creating acceptFriendRequest');
														return $q
																.reject(errResponse);
													});
								},
								
								unFriend: function(friendID){
									console.log("Starting of the method unFriend")
								    return $http.put(BASE_URL+'/unFriend/'+friendID)
								            .then(
								                    function(response){
								                        return response.data;
								                    }, 
								                    function(errResponse){
								                        console.error('Error while unFriend ');
								                        return $q.reject(errResponse);
								                    }
								            );
								},
							    rejectFriendRequest: function(friendID){
							    	console.log("Starting of the method rejectFriendRequest")
							        return $http.put(BASE_URL+'/rejectFriend/'+friendID)
							                .then(
							                        function(response){
							                            return response.data;
							                        }, 
							                        function(errResponse){
							                            console.error('Error while rejectFriendRequest');
							                            return $q.reject(errResponse);
							                        }
							                );
							},

							};

						} ]);