<template>
  <v-container class="d-flex align-center justify-space-between bg-grey-darken-4" fluid>
    <v-container>
      <v-row>
        <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
          <v-col :cols="image.cols">
            <v-img
              :src="`https://picsum.photos/1000/600?image=${image.cols * 20}`"
              cover
              height="100%"
            ></v-img>
          </v-col>
          <v-col v-if="image.children" cols="6" class="d-flex flex-column">
            <v-row>
              <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
                <v-img
                  :src="`https://picsum.photos/1000/600?image=${children.cols + childIdx}`"
                  cover
                  height="100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default({
    name: 'Gallery',
    data: () => ({
      imageLayout: [
        { cols: 4 },
        {
          cols: 8,
          children: [{ cols: 12 }, { cols: 12 }],
        },
        { cols: 6 },
        { cols: 3 },
        { cols: 9 },
        { cols: 4 },
        { cols: 8 },
      ],
    }),
  })
</script>