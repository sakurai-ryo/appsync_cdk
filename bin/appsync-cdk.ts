#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncCdkStack } from '../lib/appsync-cdk-stack';

const app = new cdk.App();
new AppsyncCdkStack(app, 'AppsyncCdkStack');
