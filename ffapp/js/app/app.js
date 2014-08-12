(function () {
	'use strict';
	
	var Fantasy = Ember.Application.create({
		//for debugging
		LOG_TRANSITIONS: true

	});

	Fantasy.Router.map(function () {
		this.route('index', {path: '/'});
		this.route('drafted', {path: '/drafted'});
	});

  //Adapters
	Fantasy.ApplicationAdapter = DS.FirebaseAdapter.extend({
		firebase: new Firebase('https://ff-2014.firebaseio.com/')
	});

	//models
	Fantasy.PlayerData = DS.Model.extend({
		player: DS.attr('string'),
		team: DS.attr('string'),
		posRank: DS.attr('string'),
		bye: DS.attr('string'),
		isDrafted: DS.attr('string'),
		owner: DS.attr('string'),
		draftedPosition: DS.attr('string')
	});

	//routes
	Fantasy.IndexRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('playerData');
		}
	});

	Fantasy.DraftedRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('playerData');
		}
	});
	
	
	//controllers
	Fantasy.ApplicationController = Ember.ArrayController.extend({
		
	});
	
	Fantasy.IndexController = Ember.ArrayController.extend({
		
	});
	
	
	Fantasy.DraftedController = Ember.ArrayController.extend({
		
	});
	
	
	
	
	
	
	
	
	
	
}());