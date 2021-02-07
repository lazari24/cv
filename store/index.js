export const state = () => ({
	aboutMeInfo: {},
	personInfo: {},
	skills: [],
	content: [],
})

export const mutations = {
	saveSkills(state, value) {
		state.skills = value
	},
	savePersonInfo(state, value) {
		state.personInfo = value
	},
	saveAboutMeInfo(state, value) {
		state.aboutMeInfo = value
	},
	saveContent(state, value) {
		state.content = value
	},
}

export const actions = {
	async nuxtServerInit ({ commit }) {
		const { skills } = await this.$content('skills')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const personInfo = await this.$content('personInfo')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const aboutMeInfo = await this.$content('aboutMe')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const { content } = await this.$content('content')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		commit('saveSkills', skills)
		commit('savePersonInfo', personInfo)
		commit('saveAboutMeInfo', aboutMeInfo)
		commit('saveContent', content)
	}
}

export const getters = {
	GET_PERSON_INFO: state => state.personInfo,
	GET_SKILLS: state => state.skills,
	GET_ABOUT_ME: state => state.aboutMeInfo,
	GET_CONTENT: state => state.content,
}
