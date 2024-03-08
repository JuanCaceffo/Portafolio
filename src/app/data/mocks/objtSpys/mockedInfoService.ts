export const mockedInfoService = jasmine.createSpyObj('PersonalInfoService', ['getSkills', 'contact'])

mockedInfoService.getSkills.and.returnValue(new Promise((resolve, _reject) => {
  resolve([{imgUrl: ''}])
}))