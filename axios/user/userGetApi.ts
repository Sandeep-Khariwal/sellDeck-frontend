import ApiHelper from "../ApiHelper";

export function GetAccountByToken() {
  return new Promise((resolve, reject) => {
    ApiHelper.get(`${process.env.URL}/api/v1/user/getAccountByToken`)
      .then((response) => resolve(response))
      .catch((error: any) => reject(error));
  });
}
