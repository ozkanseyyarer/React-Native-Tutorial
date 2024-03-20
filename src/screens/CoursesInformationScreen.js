import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Information from '../../components/Information';

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Eğitimi"
        imageSource={require('../../assests/angular.jpg')}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrapt5 Eğitimi"
        imageSource={require('../../assests/bootstrapt.jpg')}
        desc="Kapsamlı Bootstrapt5 Eğitimi"
      />
      <Information
        title="C Progralama Eğitimi"
        imageSource={require('../../assests/c.jpg')}
        desc="Kapsamlı C Programlama Eğitimi"
      />
      <Information
        title="Angular Eğitimi"
        imageSource={require('../../assests/angular.jpg')}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrapt5 Eğitimi"
        imageSource={require('../../assests/bootstrapt.jpg')}
        desc="Kapsamlı Bootstrapt5 Eğitimi"
      />
      <Information
        title="C Progralama Eğitimi"
        imageSource={require('../../assests/c.jpg')}
        desc="Kapsamlı C Programlama Eğitimi"
      />
      <Information
        title="Angular Eğitimi"
        imageSource={require('../../assests/angular.jpg')}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrapt5 Eğitimi"
        imageSource={require('../../assests/bootstrapt.jpg')}
        desc="Kapsamlı Bootstrapt5 Eğitimi"
      />
      <Information
        title="C Progralama Eğitimi"
        imageSource={require('../../assests/c.jpg')}
        desc="Kapsamlı C Programlama Eğitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
