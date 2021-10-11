#!/usr/bin/env bash

rm -rf ./packages/students/locales
rm -rf ./packages/admin/locales
rm -rf ./packages/i18n/locales

aws s3 cp s3://applyfuture-students-content162403-dev/public/i18n ./locales --recursive
cp -R ./locales ./packages/students/locales
cp -R ./locales ./packages/admin/locales
cp -R ./locales ./packages/i18n/locales
rm -rf ./locales