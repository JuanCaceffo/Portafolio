export const mockedInfoService = jasmine.createSpyObj('PersonalInfoService', ['getSkills'])

mockedInfoService.getSkills.and.returnValue(new Promise((resolve, _reject) => {
  resolve([{imgUrl: ''}])
}))