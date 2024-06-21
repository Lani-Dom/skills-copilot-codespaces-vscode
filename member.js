function skillsMember(){
	return{
		restrict: 'E',
		templateUrl: 'modules/skills/views/member.html',
		controller: 'SkillsMemberController',
		controllerAs: 'vm',
		bindToController: tgit add member.jsrue,
		scope:{
			member: 'm'
		}
	}
}