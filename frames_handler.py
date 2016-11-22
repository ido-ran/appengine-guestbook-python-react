import webapp2
import json

class FramesHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'application/json'
        res_obj = {
            'result': 3,
            'payload': 'this is frames'
        }
        self.response.out.write(json.dumps(res_obj))
