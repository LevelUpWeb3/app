import fetchBase from "./fetchBase";
import getScoreboardData, { type ScoreboardType } from "./fetchScoreboardData";
import submitFlag from "./fetchFlag";
import {
  getChallengeList,
  getChallengeDetail,
  type GetChallengeListReturnType,
  type GetChallengeDetailReturnType,
  type ChallengeDetailType,
} from "./fetchChallengeData";
import { getUserData, updateUserName } from "./fetchUserData";
import getUserScore from "./fetchUserSolvesData";

export {
  fetchBase,
  getScoreboardData,
  getChallengeList,
  getChallengeDetail,
  getUserData,
  updateUserName,
  submitFlag,
  getUserScore,
};

export type {
  GetChallengeListReturnType,
  GetChallengeDetailReturnType,
  ChallengeDetailType,
  ScoreboardType,
};
