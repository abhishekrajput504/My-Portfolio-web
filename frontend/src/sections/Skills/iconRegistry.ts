import type { IconType } from 'react-icons'
import { DiJava } from 'react-icons/di'
import {
  SiSpringboot,
  SiHibernate,
  SiSpringsecurity,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiNginx,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiEspressif,
  SiMqtt,
} from 'react-icons/si'
import { FiBox, FiServer, FiCloud, FiCpu, FiTarget } from 'react-icons/fi'
import type { SkillIconKey } from '@/types/skill'

export const iconRegistry: Record<SkillIconKey, IconType> = {
  java: DiJava,
  spring: SiSpringboot,
  hibernate: SiHibernate,
  security: SiSpringsecurity,
  microservices: FiBox,
  api: FiServer,
  mysql: SiMysql,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  linux: SiLinux,
  nginx: SiNginx,
  aws: FiCloud,
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  mui: SiMui,
  iot: FiCpu,
  esp8266: SiEspressif,
  mqtt: SiMqtt,
  problemSolving: FiTarget,
}
